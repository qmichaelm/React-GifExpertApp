import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setcategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>{inputValue}</h4>
      <input
        placeholder="Escribe una categoria"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
