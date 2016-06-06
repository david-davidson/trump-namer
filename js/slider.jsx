import React, { PropTypes } from "react";

const Slider = ({ config, onChange }) => {
  const { field, bad, good, value } = config;
  let input;

  const _onChange = () => {
    const newValue = Number(input.value);
    onChange(newValue);
  };

  return (
    <div>
      <p>{field}</p>
      <div className="slider">
        <span className="pole pole-bad">{bad.text}</span>
        <input
          className="input"
          value={value}
          ref={(domInput) => input = domInput}
          onChange={_onChange}
          type="range"
        />
        <span className="pole pole-good">{good.text}</span>
      </div>
    </div>
  );
};

Slider.propTypes = {
  config: PropTypes.shape({
    field: PropTypes.string.isRequired,
    value: PropTypes.number,
    good: PropTypes.shape({
      text: PropTypes.string
    }).isRequired,
    bad: PropTypes.shape({
      text: PropTypes.string
    }).isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Slider;
