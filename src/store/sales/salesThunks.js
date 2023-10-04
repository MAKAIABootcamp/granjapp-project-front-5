import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { FirebaseDB } from "../../firebase/firebaseConfig";
import { setSales, setMarket } from "./salesSlice";

export const getMarketAction = (idSeller) => async (dispatch) => {
  const collectionRef = collection(FirebaseDB, "Tiendas");
  const q = query(collectionRef, where("userId", "==", idSeller));
  const marketsResults = [];
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      marketsResults.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(marketsResults);
    dispatch(setMarket(marketsResults[0]));
  } catch (error) {
    console.log(error);
  }
};

export const getSales = (idMarket) => async (dispatch) => {
  const collectionRef = collection(FirebaseDB, "compras");
  const salesList = [];
  const sales = [];
  try {
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      salesList.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    salesList.forEach((item) => {
      const products = [];
      item.product.forEach((element) => {
        if (element.storeId == idMarket) {
          products.push(element);
        }
      });
      if (products.length) {
        sales.push({
          ...item,
          product: products,
        });
      }
    });

    dispatch(setSales(sales));
  } catch (error) {
    console.log(error);
  }
};
