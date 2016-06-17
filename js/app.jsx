import analytics from "react-ga";
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

    analytics.pageview(window.location.pathname);
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
    // Adjective selection relies on the following algorithm, if you want to
    // call it that: "extremity" is counted as distance (positive or negative)
    // from the threshold (default: midpoint) of each slider. Each extremity
    // score is divided by 10 and squared, such that a distance of 10 pts.
    // from the threshold is worth only 1 extremity point, 20 is worth 4, 30
    // is worth 9, etc. Then, we build an array of arrays of adjectives in which
    // each slider's adjectives appear once for each extremity point, giving
    // extra weight to extreme positions.

    const adjectivePool = this.state.sliders.reduce((memo, slider) => {
      const isFavorable = slider.value > slider.threshold;
      const extremityScore = Math.round(
        Math.pow(
          (Math.abs(slider.value - slider.threshold) / 10),
          2
        )
      );

      for (let i = 0; i <= extremityScore; i++) {
        memo.push({
          adjectives: isFavorable ? slider.good.adjectives: slider.bad.adjectives,
          isFavorable
        });
      }
      return memo;
    }, []);

    const adjectiveObj = _getRandomElement(adjectivePool);
    const isFavorable = adjectiveObj.isFavorable;
    const imagePool = isFavorable ? trumpFaces.good : trumpFaces.bad;
    const imageSrc = _getRandomElement(imagePool);

    const adjectives = adjectiveObj.adjectives;
    let adjective = _getRandomElement(adjectives);
    const name = this.state.name;
    if (name) {
      adjective = `${adjective} ${name}`;
    }

    this.setState({ adjective, imageSrc });

    analytics.event({
      category: "Interaction",
      action: "Generated Trump name",
      label: adjective
    });
  }

  _onShare() {
    const description = `My Trump name is ${this.state.adjective}! Learn yours at TrumpNamer.com`;
    const imagePath = `http://trumpnamer.com${this.state.imageSrc}`;

    // (`FB` is provided by the Facebook load script in index.html)
    FB.ui({
      method: "feed",
      link: "http://trumpnamer.com",
      description: description,
      caption: "Learn your Trump name at TrumpNamer.com",
      picture: imagePath
    });

    analytics.event({
      category: "Social",
      action: "Opened Facebook share dialog"
    });
  }

  // --------------------------------------------------------------------------

  render() {
    return (
      <div>
        <div className="content">
          <h1>TRUMP NAMER<span className="small">.com</span></h1>
          <h2 className="tagline">Discover your Trump name!</h2>

          <p><strong>Describe yourself:</strong></p>
          {this.state.sliders.map((slider, idx) => (<Slider
            key={slider.field}
            config={slider}
            onChange={this._onSliderChange.bind(this, idx)}
          />))}

          <span>Enter your name:</span>
          <input ref="name" onChange={this._onNameChange} />
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
      text: PropTypes.string.isRequired,
      adjectives: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    bad: PropTypes.shape({
      text: PropTypes.string.isRequired,
      adjectives: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
  })).isRequired
}

export default App;
