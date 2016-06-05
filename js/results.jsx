var React = require("react");

var Results = React.createClass({

  render: function () {
    return (
      <div>
        <p>
          Your Trump name is:
        </p>
        <h3 className="results">{this.props.adjective} {this.props.name}</h3>
        <p>Share your Trump name!!!</p>
        <button onClick={this.props.share}>Share</button>
        <img src={this.props.imageSrc} className="trump-face" />
      </div>
    );
  }

});

module.exports = Results;
