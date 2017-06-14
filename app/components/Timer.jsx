const React = require('react');
const {Clock} = require('Clock');
const {Controls} = require('Controls');

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }

  // componentDidUpdate() is invoked immediately after updating occurs.
  // This method is not called for the initial render.
  componentDidUpdate = (prevProps, prevState) => {
    // is there a change of the countdownStatus?
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          //break; // intentionally not break here because "stopped" shares with "paused"
        case 'paused':
          this.stopTimer();
          break;
      }
    }
  }

  // componentWillUnmount() before component gets unmounted (removed)
  componentWillUnmount = () => {
    this.stopTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleStatusChange = (newStatus) => {
    this.setState({timerStatus: newStatus})
  }

  render() {
    let {count, timerStatus} = this.state;

    return(
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
}

module.exports ={Timer};
