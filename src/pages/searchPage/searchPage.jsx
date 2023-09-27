import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getSearchProduct, getSearchesStores } from "../../firebase/search";
import { useNavigate } from "react-router";

const SearchPage = ({ searchInput }) => {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput === "") {
      setProducts([]);
    }

    const fetchData = async () => {
      const fireProducts = await getSearchProduct(searchInput);
      const fireStores = await getSearchesStores(searchInput);

      setProducts(fireProducts);
      setStores(fireStores);
    };

    fetchData();
  }, [searchInput]);

  const handleSearchProduct = (selectedOption) => {
    if (selectedOption) {
      if (selectedOption.value.id.includes("prod")) {
        setProducts([]);
        setStores([]);
        navigate("/product/" + selectedOption.value.id);
      }
    }
  };

  // Create an array of options with images and labels.
  const productOptions = products.map((product) => ({
    value: product,
    label: (
      <div>
        <img src={product.url} alt={product.name} className="w-6 h-6 mr-2" />
        {product.name}
      </div>
    ),
  }));

  // Create an array of options with images and labels.
  const storesOptions = stores.map((store) => ({
    value: store,
    label: (
      <div>
        <img src={store.logo} alt={store.title} className="w-6 h-6 mr-2" />
        {store.title}
      </div>
    ),
  }));

  return (
    <div className="flex w-full mx-auto items-center justify-center">
      {products.length > 0 && (
        <Select
          options={[...productOptions, ...storesOptions]}
          onChange={handleSearchProduct}
          placeholder="Seleccione una opcion..."
        />
      )}
    </div>
  );
};

export default SearchPage;
