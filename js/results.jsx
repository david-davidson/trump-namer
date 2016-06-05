import React from "react";

export default React.createClass({

  render() {
    return (
      <div>
        <p>
          Your Trump name is:
        </p>
        <h3 className="results">{this.props.adjective} {this.props.name}</h3>
        <p>Share your Trump name!!!</p>
        <button className="share" onClick={this.props.share}></button>
        <br />
        <img src={this.props.imageSrc} className="trump-face" />
      </div>
    );
  }

});
