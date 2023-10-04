import React, { useEffect, useState } from "react";
import { FilterButtons } from "./filterButtons/filterButtons";
import { ProductCarousel } from "./porductsCarousel/productCarousel";
import "./body.scss";
import { getStoreByUser } from "../../../firebase/Store";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/userAuth/userAuthSlice";
import BannerStore from "./BannerStore";
import { getProductByStore } from "../../../firebase/Products";
import {
  selectProducts,
  setProduct,
} from "../../../store/granjApp/granjAppSlice";
import ProductForm from "./ProductsCRUD/ProductForm";
import ProductFormUpdate from "./ProductsCRUD/ProductFormUpdate";

const BodySellers = () => {
  const [isProduct, setIsProduct] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [store, setStore] = useState({});
  const [product, setProduct] = useState({});

  const productSelector = useSelector(selectProducts);

  const [products, setProducts] = useState(productSelector || []);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.uid) {
      const getStore = async () => {
        const storeFire = await getStoreByUser(user.uid);

        setStore(storeFire);
        const products = await getProductByStore(storeFire.id);
        setProducts(products);
        dispatch(setProduct(products));
      };
      getStore();
    }
  }, [user]);

  //* @type HTML.target /
  const activeComponent = (value) => {
    switch (value) {
      case "products":
        setIsProduct(true);
        setIsUpdate(false);
        setIsAdd(false);
        break;
      case "add":
        setIsProduct(false);
        setIsUpdate(false);
        setIsAdd(true);
        break;
      case "update":
        setIsProduct(false);
        setIsAdd(false);
        setIsUpdate(true);
        break;
    }
  };
  return (
    <>
      <div className="filterButtons-container">
        {store && <BannerStore store={store} />}
        <FilterButtons activeComponent={activeComponent} />
        {isProduct && (
          <ProductCarousel
            activeComponent={activeComponent}
            products={products}
            setProduct={setProduct}
          />
        )}
        {isAdd && <ProductForm storeId={store.id} />}
        {isUpdate && <ProductFormUpdate product={product} />}
      </div>
    </>
  );
};

export default BodySellers;
