const React = require('react');
const {Clock} = require('Clock');

class Countdown extends React.Component {
  render() {
    return(
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
}

module.exports ={Countdown};
