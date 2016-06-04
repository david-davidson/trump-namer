var React = require('react');

var adjectives = require('./adjectives');
var Results = require('./results');
var Slider = require('./slider');

var THRESHOLD = 50;

var _getRandomIndex = function (max) {
  var min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var App = React.createClass({

  getInitialState: function () {
    return {
      sliders: this.props.sliders.map(function (slider) {
        return {
          field: slider.field,
          good: slider.good,
          bad: slider.bad,
          value: 50
        }
      })
    }
  },

  _onNameChange: function () {
    var name = this.refs.name.getDOMNode().value;
    this.setState({
      name: name
    });
  },

  _onChange: function (clickedIdx, value) {
    var newSliders = this.state.sliders.map(function (slider, idx) {
      if (idx === clickedIdx) {
        slider.value = value;
      };
      return slider;
    });

    this.setState({
      sliders: newSliders
    });
  },

  _onGenerate: function () {
    var totalScore = this.state.sliders.reduce(function (memo, currentSlider) {
      return memo + currentSlider.value;
    }, 0);
    var averageScore = totalScore / this.state.sliders.length;
    var isTrumpApproved = averageScore > THRESHOLD;
    var adjectiveOptions = isTrumpApproved ? adjectives.good : adjectives.bad;
    var adjectiveIndex = _getRandomIndex(adjectiveOptions.length - 1);

    this.setState({
      adjective: adjectiveOptions[adjectiveIndex]
    });
  },

  render: function () {
    return (
      <div>
        <p>Your name:</p>
        <input ref="name" onChange={this._onNameChange} />
        {this.state.sliders.map(function (slider, idx) {
          return (<Slider
            key={slider.field}
            config={slider}
            onChange={this._onChange.bind(this, idx)}
          />);
        }.bind(this))}
        <button onClick={this._onGenerate}>Generate</button>
        {this.state.adjective && (<Results
          name={this.state.name}
          adjective={this.state.adjective}
        />)}
      </div>
    );
  }

});

module.exports = App;
