import React, { useState, useEffect } from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import SearchField from "../../../Components/SearchBox/SearchField";

import { Link } from "react-router-dom";

const CharactersLibrary = ({ search, filter }) => {
  const [items, setItems] = useState([]);
  const API_URL_CHARACTERS = "http://localhost:3500/characters";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL_CHARACTERS);
        if (!response.ok) throw Error("did not receive any data");

        const listItems = await response.json();
        setItems(listItems);

        console.log(listItems.listItems.id);
      } catch (err) {
        // console.log(err.stack);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <header id="page-three-top" className="">
        <NavBar />
      </header>

      {/* Search input */}
      <ContentContainer>
        <SearchField search={search} filter={filter} />
      </ContentContainer>

      <ContentContainer>
        <div className="characters-page">
          {/* map through characters details */}
          {items.length ? (
            items.map((item, index) => {
              console.log(item.id);
              return (
                <Link
                  className="asset-div"
                  key={item.id}
                  to={`/character-detail/${item.id}`}
                >
                  <li className="asset">
                    <div className="thumbnail-wrapper">
                      <img src={item.thumbnail} alt="" />
                      <div className="overlay"></div>
                    </div>
                    <div className="asset-description">
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                      <p>Age: {item.age}</p>

                      {/* map through keywords */}
                      <ul className="tags">
                        {item.keywords.map((keyword, i) => (
                          <li
                            className={`tag tag--color${i + 1}`}
                            key={keyword}
                          >
                            {keyword}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Link>
              );
            })
          ) : (
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              Your List is empty
            </p>
          )}
        </div>
      </ContentContainer>
    </>
  );
};

export default CharactersLibrary;
