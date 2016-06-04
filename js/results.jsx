var React = require("react");

var Results = React.createClass({

  render: function () {
    var imageSrc = this.props.favorable ?
      "/trump-good.jpg" :
      "/trump-bad.jpg";

    return (
      <div>
        <p>
          Your Trump name is:
        </p>
        <h3 className="results">{this.props.adjective} {this.props.name}</h3>
        <img src={imageSrc} className="trump-face" />
      </div>
    );
  }

});

module.exports = Results;
