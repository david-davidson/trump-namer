var React = require('react');

var Slider = React.createClass({
  
  _onChange: function () {
    var value = Number(this.refs.input.getDOMNode().value);
    this.props.onChange(value);
  },

  render: function () {
    return (
      <div>
        <p>{this.props.config.field}</p>
        <span>{this.props.config.bad}</span>
        <input value={this.props.value} ref="input" onChange={this._onChange} type="range" />
        <span>{this.props.config.good}</span>
      </div>
    );
  }
});

module.exports = Slider;
