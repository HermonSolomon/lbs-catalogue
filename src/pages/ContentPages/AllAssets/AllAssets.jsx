import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../../Components/NavBar/NavBar";
// import RangeSlider2 from "./RangeSlider2";
import RangeSlider from "./RangeSlider";
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";

const AllAssets = ({ min, max }) => {
  const [assetList, setAssetList] = useState([]);

  const API_URL_INTERACTIVES = "http://localhost:3500/interactives";
  const API_URL_GRAPHICS = "http://localhost:3500/graphics";
  const API_URL_VIDEOS = "http://localhost:3500/videos";
  const API_URL_CHARACTERS = "http://localhost:3500/characters";

  const requestOne = axios.get(API_URL_INTERACTIVES);
  const requestTwo = axios.get(API_URL_GRAPHICS);
  const requestThree = axios.get(API_URL_VIDEOS);

  useEffect(() => {
    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseThree = responses[2];

          const allAssets = [];
          responses.forEach((response) => {
            response.data.map((asset) => {
              allAssets.push(asset);
            });
          });

          console.log(allAssets);
          // const allAssets = {
          //   ...responseOne,
          //   ...responseTwo,
          //   ...responseThree,
          // };

          // use/access the results
          // console.log(responseOne, responseTwo, responseThree);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });
    setAssetList();

    // const fetchItems = async () => {
    //   try {
    //     const response = await fetch(API_URL_INTERACTIVES);

    //     if (!response.ok) throw Error("didn't recieve any data");

    //     const listItems = await response.json();
    //     setAssetList(assetList);

    //     console.log(listItems);
    //   } catch (err) {
    //     console.log(err.stack);
    //   }
    // };

    // fetchItems();
  }, []);

  return (
    <>
      <header id="page-three-top" className="">
        <NavBar />
      </header>

      {/* Search input */}
      <ContentContainer>
        <div className="search-field">
          <form
            className="answerBox"
            id="textForm"
            name="textForm1"
            autocomplete="off"
          >
            <input
              type="text"
              id="textField"
              name="textField"
              placeholder="Search..."
            />
          </form>
        </div>
      </ContentContainer>

      {/*Range Slider*/}
      <ContentContainer>
        <RangeSlider
          min={0}
          max={10}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />

        {/* Asset list */}
      </ContentContainer>
      <div className="asset-list">
        {/* {assetList.map((asset) => (
          <div className="result-items">
            <div className="thumbnail">
              <div className="thumb-img">
                <img src={asset.thumbnail} alt="" />
              </div>
              <div className="overlay">
                <div className="middle">
                  <button></button>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default AllAssets;
