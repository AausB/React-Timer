const React = require('react');
const PropTypes = require('prop-types');


class Controls extends React.Component {
  render() {
    let {countdownStatus} = this.props;

    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return(
          <button className='button secondary'>Pause</button>
        );
      } else if (countdownStatus === 'paused') {
        return (
          <button className='button primary'>Start</button>
        );
      }
    };

    return(
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow'>Clear</button>
      </div>
    );
  }

}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired
}

module.exports = {Controls};
