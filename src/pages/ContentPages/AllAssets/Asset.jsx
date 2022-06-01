import React from "react";

const Asset = ({ asset, minVal, maxVal }) => {
  // console.log(asset.daysToBuild, minVal, maxVal);

  return asset.daysToBuild >= minVal && asset.daysToBuild <= maxVal ? (
    <div className="result-items" key={asset.id}>
      <div className="thumbnail">
        <div className="thumb-img">
          <img className="img-responsive" src={asset.thumbnail} alt="" />
        </div>
        <div className="overlay">
          <div className="middle">
            <button className="btn btn-secondary view-btn">View Asset</button>
            <button className="btn btn-secondary download-btn">Download</button>
          </div>
        </div>
      </div>
      <h3 className="asset-info">{asset.title}</h3>
      <p className="asset-description">{asset.description}</p>
    </div>
  ) : (
    ""
  );
};

export default Asset;
