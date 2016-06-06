import React, { Component, PropTypes } from "react";

import Footer from "./footer";
import Results from "./results";
import Slider from "./slider";
import trumpFaces from "../config/trump-images";

const DEFAULT_THRESHOLD = 50;

const _getRandomIndex = (max) => Math.floor(Math.random() * (max + 1));
const _getRandomElement = (options) => {
  const randomIndex = _getRandomIndex(options.length - 1);
  return options[randomIndex];
};

class App extends Component {

  // --------------------------------------------------------------------------

  constructor(props) {
    super(props);
    ["_onNameChange", "_onSliderChange", "_onGenerate", "_onShare"].forEach((method) => {
      this[method] = this[method].bind(this);
    });

    this.state = {
      name: "",
      sliders: props.sliders.map((slider) => {
        const threshold = slider.threshold || DEFAULT_THRESHOLD;
        const value = threshold;
        return { ...slider, ...{ threshold }, ...{ value } };
      })
    };
  }

  // --------------------------------------------------------------------------

  _onNameChange() {
    const name = this.refs.name.value;
    this.setState({ name });
  }

  _onSliderChange(changedIdx, newValue) {
    const sliders = this.state.sliders.map((slider, idx) => {
      const value = idx === changedIdx ? newValue : slider.value;
      return { ...slider, ...{ value } };
    });

    this.setState({ sliders });
  }

  _onGenerate() {
    const adjectivePool = this.state.sliders.reduce((memo, slider) => {
      const isFavorable = slider.value > slider.threshold;
      const extremityScore = Math.abs(slider.value - slider.threshold);

      for (let i = 0; i <= extremityScore; i++) {
        memo.push({
          adjective: isFavorable ? slider.good.adjective: slider.bad.adjective,
          isFavorable
        });
      }
      return memo;
    }, []);

    const adjectiveObj = _getRandomElement(adjectivePool);
    const isFavorable = adjectiveObj.isFavorable;
    const imagePool = isFavorable ? trumpFaces.good : trumpFaces.bad;
    const imageSrc = _getRandomElement(imagePool);

    let adjective = adjectiveObj.adjective;
    const name = this.state.name;
    if (name) {
      adjective = `${adjective} ${name}`;
    }

    this.setState({ adjective, imageSrc });
  }

  _onShare() {
    const descriptionString = `My Trump name is ${this.state.adjective}! ` +
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
  }

  // --------------------------------------------------------------------------

  render() {
    return (
      <div>
        <div className="content">
          <h1>TRUMP NAMER<span className="small">.com</span></h1>
          <h2 className="tagline">Discover your Trump name!</h2>

          <span>Your name:</span>
          <input ref="name" onChange={this._onNameChange} />
          <hr />

          <p>Now describe yourself:</p>

          {this.state.sliders.map((slider, idx) => (<Slider
            key={slider.field}
            config={slider}
            onChange={this._onSliderChange.bind(this, idx)}
          />))}

          <button onClick={this._onGenerate}>Generate</button>

          {this.state.adjective && (<Results
            adjective={this.state.adjective}
            onShare={this._onShare}
            imageSrc={this.state.imageSrc}
          />)}

        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  sliders: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    threshold: PropTypes.number,
    good: PropTypes.shape({
      text: PropTypes.string,
      adjective: PropTypes.string
    }).isRequired,
    bad: PropTypes.shape({
      text: PropTypes.string,
      adjective: PropTypes.string
    }).isRequired
  })).isRequired
}

export default App;
