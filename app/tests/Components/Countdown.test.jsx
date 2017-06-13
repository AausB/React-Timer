const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-dom/test-utils');

const {Countdown} = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    // "done" tells mocha that it is a async test
    // and when the async part is completed
    it('should set state to started and countdown', (done) => {
      // render the coundown component
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      // this is asynchronous
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        // tell mocha that the asnyc callback is completed
        done();
      }, 1001); // wait more than a second
    });

    it('should not set count to be negative', (done) => {
      // render the coundown component
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      // this is asynchronous
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        // tell mocha that the asnyc callback is completed
        done();
      }, 3001); // wait more than 3 seconds
    });

    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      // set countdown time to 3 sec and start the interval
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      // set countdown time to 3 sec and start the interval
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });


  });
})
