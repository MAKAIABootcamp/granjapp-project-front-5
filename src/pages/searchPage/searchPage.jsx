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
    navigate(`?q=${searchText}`);
  };

  return <div className="result">resultados</div>;
};

export default SearchPage;
