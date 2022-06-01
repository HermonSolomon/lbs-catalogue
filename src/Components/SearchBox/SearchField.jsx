import React from "react";

const SearchField = ({ search, filter }) => {
  return (
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
  );
};

export default SearchField;
