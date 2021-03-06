const React = require('react');
const PropTypes = require('prop-types');


class Controls extends React.Component {

  // componentWillReceiveProps() is invoked before a mounted component receives new props.
  // componentWillReceiveProps = (newProps) => {
  //   console.log('component will receive props: ', newProps.countdownStatus);
  // }

  onStatusChange = (newStatus) => {
    // returns a function that calls the props function which is
    // submitted by the parent react element Countdown.jsx
    return () => {
      this.props.onStatusChange(newStatus); // Countdown.handleStatusChange(newStatus)
    }
  }

  render() {
    // onClick event calls onStatusChange()
    // - onStatusChange returns a function provided by parent to Controls.props.onStatusChange
    // -- to set the status in the controlling parent container Countdown.jsx
    let {countdownStatus} = this.props;

    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        // IMPORTANT !!!
        // REACT specific: onClick expects a function not a function call
        // this is why Controls.onStatusChange() returns a function!
        // Same as this (by alex):
        // <button className='button secondary' onClick={() => this.props.onStatusChange('paused')}>Pause</button>
        return(
          <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
        );
      } else {
        return (
          <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>
        );
      }
    };

    return(
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }

}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired
}

module.exports = {Controls};
