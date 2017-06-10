const React = require('react');
const {Clock} = require('Clock');
const {CountdownForm} = require('CountdownForm');

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    // is there a change of the countdownStatus?
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      let newCount = (this.state.count > 0) ? (this.state.count - 1) : 0;
      console.log(newCount);
      this.setState({
        count: newCount
      });
      if (newCount === 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  render() {
    let {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
}

module.exports ={Countdown};
