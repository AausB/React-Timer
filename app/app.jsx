'use strict';

// webpack loads the modules:
const React = require('react');
const ReactDOM = require('react-dom');

const {BrowserRouter, Route, Switch} = require('react-router-dom');
const Router = BrowserRouter;

const {Main} = require('Main');
const {Navigation} = require('Navigation');
const {Countdown} = require('Countdown');
const {Timer} = require('Timer');
const {NotFound} = require('NotFound');

// load foundation-sites with the style loader and css loader
// 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// add custom styles to all pages
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  // a jsx element with the name of the React Class from above
  //<Greeter name={firstName} message={message}/>,
  <Router>
    <div className="container">
      <Navigation/>
      <div className="row">
        <div className="columns small-centered medium-6 large-4">
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/timer' component={Timer}/>
            <Route path='/countdown' component={Countdown}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </div>
  </Router>,
  // This is where React inserts the generated HTML: div#app
  document.getElementById('app')
);
