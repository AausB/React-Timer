const React = require('react');
const {Clock} = require('Clock');
const {CountdownForm} = require('CountdownForm');
const {Controls} = require('Controls');

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
        case 'stopped':
          this.setState({count: 0});
          //break;
        case 'paused':
          this.stopTimer();
          break;
      }
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      let newCount = (this.state.count > 0) ? (this.state.count - 1) : 0;
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
    this.timer = undefined;
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange = (newStatus) => {
    this.setState({countdownStatus: newStatus})
  }

  render() {
    let {count, countdownStatus} = this.state;

    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return(
          <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
        );
      } else {
        return(
          <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        );
      }
    }
    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
}

module.exports ={Countdown};
