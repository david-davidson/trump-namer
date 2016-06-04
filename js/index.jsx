var React = require('react');

var App = require('./app');
var sliders = require('./slider-config');

React.render(<App sliders={sliders} />, document.getElementById('app'));
