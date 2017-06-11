const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-dom/test-utils');

const {Controls} = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render "Pause" when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>);
      var $element = $(ReactDOM.findDOMNode(controls));

      // jQuery: find a button inside $element which contains the text Paused
      var $pauseButton = $element.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    
    it('should render "Start" when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'}/>);
      var $element = $(ReactDOM.findDOMNode(controls));

      // jQuery: find a button inside $element which contains the text Start
      var $startButton = $element.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
