import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../../Components/NavBar/NavBar";
import RangeSlider from "./RangeSlider";
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import SearchField from "../../../Components/SearchBox/SearchField";
import Asset from "./Asset";

const AllAssets = ({}) => {
  const [assetList, setAssetList] = useState([]);
  const [search, setSearch] = useState("");
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);

  const API_URL_INTERACTIVES = "http://localhost:3500/interactives";
  const API_URL_GRAPHICS = "http://localhost:3500/graphics";
  const API_URL_VIDEOS = "http://localhost:3500/videos";
  // const API_URL_CHARACTERS = "http://localhost:3500/characters";
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
        // Use the toLowerCase() method to make it case-insensitive
        return asset.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setAssetList(results);
    } else {
      // If the text field is empty, show all users
      setAssetList(assetList);
    }

    setSearch(keyword);
  };

  const handleSetMin = (value) => {
    setMinVal(value);
  };

  const handleSetMax = (value) => {
    setMaxVal(value);
  };

  return (
    <>
      <header id="page-three-top" className="">
        <NavBar />
      </header>
      {/* Search input */}
      <ContentContainer>
        <SearchField search={search} filter={filter} />
      </ContentContainer>

      {/*Range Slider*/}
      <ContentContainer>
        <RangeSlider
          min={0}
          max={10}
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={handleSetMin}
          setMaxVal={handleSetMax}
          // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          assetList={assetList}
          setAssetList={setAssetList}
        />
      </ContentContainer>

      {/* Asset list */}
      <div className="asset-list">
        {assetList.map((asset) => {
          return <Asset asset={asset} minVal={minVal} maxVal={maxVal} />;
        })}
      </div>
      <ContentContainer></ContentContainer>
    </>
  );
};

export default AllAssets;
