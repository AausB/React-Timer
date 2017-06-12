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

  // componentDidUpdate() is invoked immediately after updating occurs.
  // This method is not called for the initial render.
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

  // // componentWillUpdate() is invoked immediately before rendering
  // // when new props or state are being received.
  // componentWillUpdate = (nextProps, nextState) => {
  //
  // }
  //
  // // componentWillReceiveProps() is invoked before a mounted component receives new props.
  // componentWillReceiveProps = (nextProps) => {
  //
  // }
  //
  // // componentWillMount() called right before render()
  // componentWillMount = () => {
  //   console.log('component WILL mount');
  // }
  //
  // // componentDidMount() is invoked immediately after a component is mounted
  // componentDidMount = () => {
  //   console.log('component DID mount');
  // }
  //
  // // componentWillUnmount() before component gets unmounted (removed)
  // componentWillUnmount = () => {
  //   console.log('component WILL unmount');
  //   this.stopTimer();
  //   console.log('clear interval an timer');
  // }

  startTimer = () => {
    this.timer = setInterval(() => {
      let newCount = (this.state.count > 0) ? (this.state.count - 1) : 0;
      this.setState({
        count: newCount
      });
      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
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
