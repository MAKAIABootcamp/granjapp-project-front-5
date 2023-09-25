import React from "react";
import { useState } from "react";
import { getSearchesStores, getSearchProduct } from "../../firebase/search";

const FunctionSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };
  return <div className="results"></div>;
};

export default FunctionSearch;
