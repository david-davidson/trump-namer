import React, { PropTypes } from "react";

const Results = ({ adjective, imageSrc, onFacebookShare, twitterShareConfig }) => {

  const twitterBase = "https://twitter.com/intent/tweet?";
  const tweetParams = Object.keys(twitterShareConfig)
    .map((key) => `${key}=${encodeURIComponent(twitterShareConfig[key])}`)
    .join("&");
  const twitterHref = `${twitterBase}${tweetParams}`;

  return (
    <div>
      <p>Your Trump name is:</p>
      <h3 className="results">"{adjective}"</h3>

      <button className="fb-share" onClick={onFacebookShare}></button>
      <br />
      <a href={twitterHref}><button className="twitter-share"></button></a>
      <br />

      <img src={`./${imageSrc}`} className="trump-face" />
    </div>
  );
};

Results.propTypes = {
  adjective: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  onFacebookShare: PropTypes.func.isRequired,
  twitterShareConfig: PropTypes.shape({
    text: PropTypes.string.isRequired,
    via: PropTypes.string,
    hashtags: PropTypes.string
  }).isRequired
};

export default Results;
