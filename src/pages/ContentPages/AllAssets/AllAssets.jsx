import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import RangeSlider2 from "./RangeSlider2";
const AllAssets = () => {
  return (
    <>
      <header id="page-three-top" className="">
        <NavBar />
      </header>

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

      <RangeSlider2
        min={0}
        max={10}
        // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </>
  );
};

export default AllAssets;
