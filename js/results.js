var React = require("react");

var Results = React.createClass({

  render: function () {
    return (
      <div>
        Your Trump name is <strong>{this.props.adjective} {this.props.name}</strong>
      </div>
    );
  }

});

module.exports = Results;
