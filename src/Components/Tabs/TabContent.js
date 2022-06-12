import React from "react";

const TabContent = () => {
  return (
    <div className="tabs-content">
      <div className="asset-list">
        {items.map((item) => {
          return (
            <div className="result-items" key={item.id}>
              <div className="thumbnail">
                <div className="thumb-img">
                  <img className="img-responsive" src={item.thumbnail} alt="" />
                </div>
                <div className="overlay">
                  <div className="middle">
                    <button className="btn btn-secondary view-btn">
                      View Asset
                    </button>
                    <button className="btn btn-secondary download-btn">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="asset-info">{item.title}</h3>
              <p className="asset-description">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="assets-history"></div>
    </div>
  );
};

export default TabContent;
