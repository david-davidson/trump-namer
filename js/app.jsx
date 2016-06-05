import React from "react";

import adjectives from "./adjectives";
import Results from "./results";
import Slider from "./slider";

const THRESHOLD = 50;
const _getRandomIndex = (max) => Math.floor(Math.random() * (max + 1));

export default React.createClass({

  // --------------------------------------------------------------------------

  getInitialState() {
    return {
      name: "",
      sliders: this.props.sliders.map((slider) => ({ ...slider, ...{ value: 50 } }))
    };
  },

  // --------------------------------------------------------------------------

  _onNameChange() {
    const name = this.refs.name.getDOMNode().value;
    this.setState({ name });
  },

  _onSliderChange(changedIdx, newValue) {
    const sliders = this.state.sliders.map((slider, idx) => {
      const value = idx === changedIdx ? newValue : slider.value;
      return { ...slider, ...{ value } };
    });

    this.setState({ sliders });
  },

  _onGenerate() {
    const totalScore = this.state.sliders.reduce((memo, currentSlider) => memo + currentSlider.value, 0);
    const averageScore = totalScore / this.state.sliders.length;
    const favorable = averageScore > THRESHOLD;
    const adjectiveOptions = favorable ? adjectives.good : adjectives.bad;
    const adjectiveIndex = _getRandomIndex(adjectiveOptions.length - 1);
    const imageSrc = favorable ?
      "/trump-good.jpg" :
      "/trump-bad.jpg";

    this.setState({
      adjective: adjectiveOptions[adjectiveIndex],
      favorable,
      imageSrc
    });
  },

  _onShare() {
    const descriptionString = `My Trump name is ${this.state.adjective} ${this.state.name}! ` +
      `Learn yours at TrumpNamer.com`;
    const imagePath = `http://trumpnamer.com${this.state.imageSrc}`;

    // `FB` is provided by the Facebook load script in index.html
    FB.ui({
      method: "feed",
      link: "http://trumpnamer.com",
      description: descriptionString,
      caption: "Learn your Trump name at TrumpNamer.com",
      picture: imagePath
    });
  },

  // --------------------------------------------------------------------------

  render() {
    return (
      <div className="content">
        <h1>TRUMP NAMER<span className="small">.com</span></h1>
        <h2 className="tagline">Discover your Trump name!</h2>

        <span>Your name:</span>
        <input ref="name" onChange={this._onNameChange} />

        <p>Describe yourself:</p>

        {this.state.sliders.map((slider, idx) => (<Slider
          key={slider.field}
          config={slider}
          onChange={this._onSliderChange.bind(this, idx)}
        />))}

        <button onClick={this._onGenerate}>Generate</button>

        {this.state.adjective && (<Results
          favorable={this.state.favorable}
          name={this.state.name}
          adjective={this.state.adjective}
          share={this._onShare}
          imageSrc={this.state.imageSrc}
        />)}
      </div>
    );
  }

});
