const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-dom/test-utils');

const {CountdownForm} = require('CountdownForm');

// good habit to test for Component exists
describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  // Test whether a function is OR is not called with which arguments 
  it('should call onSetCountdown if valid seconds entered', () => {
    // create a spy
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    let $element = $(ReactDOM.findDOMNode(countdownForm));

    // set the value of the input field before submit
    countdownForm.refs.seconds.value = '109';
    // select the first DOMNode from the jQuery object: $element.find('form')[0]
    // TestUtils.Simulate.submit(DOMNode) needs a DOMNode not a jQuery Object
    TestUtils.Simulate.submit($element.find('form')[0]);

    // assert whether spy is called with the input field value from above
    expect(spy).toHaveBeenCalledWith(109);
  });


    it('should NOT call onSetCountdown if invalid data entered', () => {
      // create a spy
      let spy = expect.createSpy();
      let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      let $element = $(ReactDOM.findDOMNode(countdownForm));

      // set the value of the input field before submit
      // not a number
      countdownForm.refs.seconds.value = 'test';
      // select the first DOMNode from the jQuery object: $element.find('form')[0]
      // TestUtils.Simulate.submit(DOMNode) needs a DOMNode not a jQuery Object
      TestUtils.Simulate.submit($element.find('form')[0]);

      // assert whether spy is called with the input field value from above
      expect(spy).toNotHaveBeenCalled();
    });
});
