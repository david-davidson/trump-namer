import React, { PropTypes } from "react";

const Results = ({ adjective, imageSrc, name, onShare }) => {
  return (
    <div>
      <p>Your Trump name is:</p>
      <h3 className="results">{adjective} {name}</h3>

      <p>Share your Trump name!!!</p>
      <button className="share" onClick={onShare}></button>
      <br />

      <img src={imageSrc} className="trump-face" />
    </div>
  );
};

Results.propTypes = {
  adjective: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onShare: PropTypes.func.isRequired,
};

export default Results;
