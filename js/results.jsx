import React, { PropTypes } from "react";

const Results = ({ adjective, imageSrc, onShare }) => {
  return (
    <div>
      <p>Your Trump name is:</p>
      <h3 className="results">"{adjective}"</h3>

      <button className="share" onClick={onShare}></button>
      <br />

      <img src={imageSrc} className="trump-face" />
    </div>
  );
};

Results.propTypes = {
  adjective: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  onShare: PropTypes.func.isRequired,
};

export default Results;
