import React from "react";

const RangeSlider2 = ({ min, max }) => {
  return (
    <div className="content-container__container--1col">
      <div className="multi-range">
        <div className="inverse-left" style={{ width: "100%" }}></div>
        <div className="inverse-right" style={{ width: "100%" }}></div>
        <div className="range" style={{ left: "0%", right: "0%" }}></div>
        <span className="thumb" style={{ left: "1%" }}></span>
        <span className="thumb" style={{ left: "100%" }}></span>
        <div className="sign" style={{ left: "1%" }}>
          <span id="value">1</span>
        </div>
        <div className="sign" style={{ left: "100%" }}>
          <span id="value">10</span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider2;
