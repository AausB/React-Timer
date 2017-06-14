const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-dom/test-utils');

const {Timer} = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('Timer operations', () => {
    // "done" tells mocha that it is a async test
    // and when the async part is completed
    it('should initially set state to stopped with count 0', () => {
      // render the coundown component
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
    });

    it('should set state to started and run timer', (done) => {
      // render the coundown component
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);

      // this is asynchronous
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(1);
        // tell mocha that the asnyc callback is completed
        done();
      }, 1001); // wait more than a second
    });

    it('should set state to paused and pause timer', (done) => {
      // render the coundown component
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');
      expect(timer.state.count).toBe(10);

      // this is asynchronous
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(10);
        // tell mocha that the asnyc callback is completed
        done();
      }, 1001); // wait more than a second
    });

    it('should set state to stopped and clear timer', (done) => {
      // render the coundown component
      let timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);

      // this is asynchronous
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
        // tell mocha that the asnyc callback is completed
        done();
      }, 1001); // wait more than a second
    });

  });
})
