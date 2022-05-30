import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import CharacterExample from "../../../assets/Alex.svg";

const CharactersDetails = () => {
  return (
    <>
      <header id="page-three-top" className="">
        <NavBar />
      </header>

      <ContentContainer>
        {/* Search Field */}

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

      {/* Chosen Asset */}
      <ContentContainer>
        <div className="selected-character">
          <div className="character-item">
            <div className="character-image">
              <img src={CharacterExample} alt="" />
            </div>
            <div className="character-description">
              <h1>Alice</h1>
              <p>Age:</p>
              <span>21-35</span>
              <p>Description:</p>
              <span>
                Description: As Every Second Matters, but with multiple,
                randomised questions for each answer.
              </span>
              <p>tags: </p>
              <ul className="tags">
                <li className="tag">Hotspot</li>
                <li className="tag">Data</li>
                <li className="tag">DotNative</li>
                <li className="tag">Bitesize</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default CharactersDetails;
