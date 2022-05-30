import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../../Components/NavBar/NavBar";
// import RangeSlider2 from "./RangeSlider2";
import RangeSlider from "./RangeSlider";
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";

const AllAssets = ({ min, max }) => {
  const [assetList, setAssetList] = useState([]);
  const [search, setSearch] = useState("");

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
          const allAssets = [];

          responses.forEach((response) => {
            response.data.map((asset) => {
              allAssets.push(asset);
            });
          });

          const fetchedUrls = allAssets;
          setAssetList(fetchedUrls);

          // console.log(fetchedUrls);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });
    // setAssetList();
  }, []);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = assetList.filter((asset) => {
        return asset.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setAssetList(results);
    } else {
      setAssetList(assetList);
      // If the text field is empty, show all users
    }

    setSearch(keyword);
  };

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
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              id="textField"
              name="textField"
              placeholder="Search..."
              value={search}
              onChange={filter}
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
          assetList={assetList}
          setAssetList={setAssetList}
        />
      </ContentContainer>

      {/* Asset list */}
      <div className="asset-list">
        {assetList.map((asset) => {
          // console.log(asset);
          return (
            <div className="result-items">
              <div className="thumbnail">
                <div className="thumb-img">
                  <img
                    className="img-responsive"
                    src={asset.thumbnail}
                    alt=""
                  />
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
              <h3 className="asset-info">{asset.title}</h3>
              <p className="asset-description">{asset.description}</p>
            </div>
          );
        })}
      </div>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default AllAssets;
