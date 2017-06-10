const React = require('react');
const {Clock} = require('Clock');
const {CountdownForm} = require('CountdownForm');

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds
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
