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

const BodySellers = () => {
  const [isProduct, setIsProduct] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [store, setStore] = useState({});

  const productSelector = useSelector(selectProducts)

  const [products, setProducts] = useState(productSelector || []);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.uid) {
      const getStore = async () => {
        const storeFire = await getStoreByUser(user.uid);

        setStore(storeFire);
        
        console.log(storeFire)
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
        setIsAdd(false);
        break;
      case "add":
        setIsProduct(false);
        setIsAdd(true);
        break;
      case "update":
        setIsProduct(false);
        setIsAdd(false);
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
      </div>
    </>
  );
};

export default BodySellers;
