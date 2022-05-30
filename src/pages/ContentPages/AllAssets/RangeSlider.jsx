import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import axios from "axios";

const RangeSlider = ({ min, max, onChange, assetList, setAssetList }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  console.log(assetList);

  // // API DATA
  // const [assetList, setAssetList] = useState([]);
  // const [search, setSearch] = useState("");

  // const API_URL_INTERACTIVES = "http://localhost:3500/interactives";
  // const API_URL_GRAPHICS = "http://localhost:3500/graphics";
  // const API_URL_VIDEOS = "http://localhost:3500/videos";
  // const API_URL_CHARACTERS = "http://localhost:3500/characters";
  // const requestOne = axios.get(API_URL_INTERACTIVES);
  // const requestTwo = axios.get(API_URL_GRAPHICS);
  // const requestThree = axios.get(API_URL_VIDEOS);

  // useEffect(() => {
  //   axios
  //     .all([requestOne, requestTwo, requestThree])
  //     .then(
  //       axios.spread((...responses) => {
  //         const allAssets = [];

  //         responses.forEach((response) => {
  //           response.data.map((asset) => {
  //             allAssets.push(asset);
  //           });
  //         });

  //         const fetchedUrls = allAssets;
  //         setAssetList(fetchedUrls);

  //         // Need to store fetchedUrls to useState
  //         // console.log(assetList);
  //       })
  //     )
  //     .catch((errors) => {
  //       // react on errors.
  //       console.error(errors);
  //     });
  //   // setAssetList();
  // }, []);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="slider-wrapper">
      <div className="range-slider">
        {/*  */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100,
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </div>
    </div>
  );
};

RangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RangeSlider;
