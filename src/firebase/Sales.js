import { FirebaseDB } from "./firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore/lite";




export const getSalesByStore = async (storeId) => {
  const sales = query(
    collection(FirebaseDB, "compras"),
    where("product.storeId", "==", storeId)
  );
  const productsSnapshot = await getDocs(sales);
  const productsList = productsSnapshot.docs.map((doc) => {
    const id = doc.id;
    return { id, ...doc.data() };
  });

  return productsList;
};

export const getProductByStore = async (storeId) => {
  const products = query(
    collection(FirebaseDB, "productos"),
    where("storeId", "==", storeId)
  );
  const productsSnapshot = await getDocs(products);
  const productsList = productsSnapshot.docs.map((doc) => {
    const id = doc.id;
    return { id, ...doc.data() };
  });

  return productsList;
};
