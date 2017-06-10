const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-dom/test-utils');


const {Clock} = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);

      // convert React Component into a jQuery object (= DOM object)
      // ReactDOM.findDOMNode returns the corresponding native browser DOM element.
      // This method is useful for reading values out of the DOM
      let $el = $(ReactDOM.findDOMNode(clock));
      let actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    })
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 615;
      var expected = '10:15';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
    it('should format seconds when min/sec are less then 10', () => {
      // create an instance from the React class Clock
      let clock = TestUtils.renderIntoDocument(<Clock/>);
      let seconds = 61;
      var expected = '01:01';
      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
