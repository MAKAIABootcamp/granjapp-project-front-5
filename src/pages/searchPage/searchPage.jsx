import React from "react";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getSearchesStores, getSearchProduct } from "../../firebase/search";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const store = getSearchesStores(q);
  const product = getSearchProduct(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && store.length === 0 && product.length === 0;

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <div className="result" onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="Buscar en granjapp"
        className="inputSearchMobile__inputBusq"
        name="searchText"
        autoComplete="off"
        value={searchText}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchPage;
