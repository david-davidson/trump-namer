import React from "react";

import Results from "./results";
import Slider from "./slider";
import trumpFaces from "../config/trump-images";

const THRESHOLD = 50;

const _getRandomIndex = (max) => Math.floor(Math.random() * (max + 1));

const _getRandomElement = (options) => {
  const randomIndex = _getRandomIndex(options.length - 1);
  return options[randomIndex];
};

export default React.createClass({

  // --------------------------------------------------------------------------

  getInitialState() {
    return {
      name: "",
      sliders: this.props.sliders.map((slider) => {
        const threshold = slider.threshold || 50;
        const value = threshold;
        return { ...slider, ...{ threshold }, ...{ value } };
      })
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
    const adjectivePool = this.state.sliders.reduce((memo, slider) => {
      const isFavorable = slider.value > slider.threshold;
      const extremityScore = Math.round(Math.abs(slider.value - slider.threshold) / 10);

      for (let i = 0; i <= extremityScore; i++) {
        memo.push({
          adjective: isFavorable ? slider.good.adjective: slider.bad.adjective,
          isFavorable
        });
      }
      return memo;
    }, []);

    const adjectiveObj = _getRandomElement(adjectivePool);
    const adjective = adjectiveObj.adjective;
    const isFavorable = adjectiveObj.isFavorable;
    const imagePool = isFavorable ? trumpFaces.good : trumpFaces.bad;
    const imageSrc = _getRandomElement(imagePool);

    this.setState({ adjective, imageSrc });
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
          value={slider.value}
          key={slider.field}
          config={slider}
          onChange={this._onSliderChange.bind(this, idx)}
        />))}

        <button onClick={this._onGenerate}>Generate</button>

        {this.state.adjective && (<Results
          name={this.state.name}
          adjective={this.state.adjective}
          share={this._onShare}
          imageSrc={this.state.imageSrc}
        />)}
      </div>
    );
  }

});
