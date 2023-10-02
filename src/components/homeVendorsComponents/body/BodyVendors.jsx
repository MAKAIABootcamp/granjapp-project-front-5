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

const BodyVendors = () => {
  const [isProduct, setIsProduct] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [store, setStore] = useState({});

  const [products, setProducts] = useState(useSelector(selectProducts));
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.uid) {
      const getStore = async () => {
        const storeFire = await getStoreByUser(user.uid);
        setStore(storeFire);
      };
      getStore();
    }
  }, [user]);

  useEffect(() => {
    if (products.length == 0 && store.id) {
      const getProducts = async () => {
        const products = await getProductByStore(store.id);
        setProducts(products);
        dispatch(setProduct(products));
      };
      getProducts();
    }
  });
  //* @type HTML.target /
  const activeComponent = (value) => {
    console.log(value);
    console.log(products);
    switch (value) {
      case "products":
        setIsProduct(true);
        setIsAdd(false);
        setIsDelete(false);
        setIsUpdate(false);
        break;
      case "add":
        setIsProduct(false);
        setIsAdd(true);
        setIsDelete(false);
        setIsUpdate(false);
        break;
      case "update":
        setIsProduct(false);
        setIsAdd(false);
        setIsDelete(false);
        setIsUpdate(true);
        break;
    }
  };
  return (
    <>
      <div className="filterButtons-container">
        {store && <BannerStore store={store} />}
        <FilterButtons activeComponent={activeComponent} />
        {isProduct && <ProductCarousel products={products} />}
        {isAdd && <ProductForm storeId={store.id} />}
        {isUpdate && <ProductCarousel products={products} />}
        {isDelete && <ProductCarousel products={products} />}
      </div>
    </>
  );
};

export default BodyVendors;
