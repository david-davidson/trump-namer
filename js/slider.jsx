import React from "react";

export default React.createClass({
  
  _onChange() {
    const newValue = Number(this.refs.input.getDOMNode().value);
    this.props.onChange(newValue);
  },

  render() {
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
