import React, { useState, useEffect } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import CharacterExample from "../../../assets/Alex.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharactersDetails = () => {
  const API_URL_CHARACTERS = "http://localhost:3500/characters";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { id } = useParams();

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(API_URL_CHARACTERS)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const thisProduct = items.find((prod) => prod.id === id);

    return (
      <>
        {console.log(items)}
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
                <img src={thisProduct.thumbnail} alt="" />
              </div>
              <div className="character-description">
                <h1>{thisProduct.name}</h1>
                <span>Age: {thisProduct.age}</span>
                <p>Description: {thisProduct.description}</p>
                <p>tags: </p>
                <ul className="tags">
                  {thisProduct.keywords.map((keyword, i) => (
                    <li className={`tag tag--color${i + 1}`} key={keyword}>
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ContentContainer>
      </>
    );
  }
};

export default CharactersDetails;
