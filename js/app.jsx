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
      name: "",
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

  _share: function () {
    var descriptionString = 'My Trump name is ' + this.state.adjective + ' ' + this.state.name + '!' +
      '\nWhat\s yours? Learn at www.TrumpNamer.com';
    var fullImagePath = 'http://www.trumpnamer.com' + this.state.imageSrc;

    FB.ui({
      method: 'feed',
      link: 'http://www.trumpnamer.com',
      description: descriptionString,
      caption: descriptionString,
      picture: fullImagePath
    });
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
    var favorable = averageScore > THRESHOLD;
    var adjectiveOptions = favorable ? adjectives.good : adjectives.bad;
    var adjectiveIndex = _getRandomIndex(adjectiveOptions.length - 1);
    var imageSrc = favorable ?
      "/trump-good.jpg" :
      "/trump-bad.jpg";

    this.setState({
      adjective: adjectiveOptions[adjectiveIndex],
      favorable: favorable,
      imageSrc: imageSrc
    });
  },

  render: function () {
    return (
      <div className="content">
        <h1>TRUMP NAMER<span className="small">.com</span></h1>
        <h2 className="tagline">Discover your Trump name!</h2>

        <span>Your name:</span>
        <input ref="name" required={true} onChange={this._onNameChange} />

        <p>Describe yourself:</p>

        {this.state.sliders.map(function (slider, idx) {
          return (<Slider
            key={slider.field}
            config={slider}
            onChange={this._onChange.bind(this, idx)}
          />);
        }.bind(this))}

        <button onClick={this._onGenerate}>Generate</button>

        {this.state.adjective && (<Results
          favorable={this.state.favorable}
          name={this.state.name}
          adjective={this.state.adjective}
          share={this._share}
          imageSrc={this.state.imageSrc}
        />)}
      </div>
    );
  }

});

module.exports = App;
