const React = require('react');
const PropTypes = require('prop-types');

class CountdownForm extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();

    // get value from the input field
    let strSeconds = this.refs.seconds.value;

    // include any jQuery commands in react
    console.log('input count', $('input').length);

    // check with regex
    // start with: ^
    // one to many numbers [0-9]*
    // end with:$
    if (strSeconds.match(/^[0-9]+$/)) {
      // empty input field
      this.refs.seconds.value = '';
      // call callback from parent handleSetCountdown()
      this.props.onSetCountdown(parseInt(strSeconds, 10)); // use deciaml system: 10
    }
  }

  render() {
    return(
      <div>
        <form ref='form' onSubmit={this.onSubmit} className='countdown-form'>
          <input type='text' ref='seconds' placeholder='Enter time in seconds'/>
          <button className='button expanded'>Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {
  onSetCountdown: PropTypes.func.isRequired
}

module.exports = {CountdownForm};
