import { FirebaseDB } from "./firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
} from "firebase/firestore/lite";

export const getSearchesStores = async () => {
  try {
    const stores = collection(FirebaseDB, "Tiendas");
    const storesSnapshot = await getDocs(stores)
      .where("title", "==", search)
      .get();
    const storesList = storesSnapshot.docs.map((doc) => doc.data());
    return storesList;
  } catch (error) {
    console.error("Error al buscar:", error);
  }
};

export const getSearchProduct = async () => {
  try {
    const products = collection(FirebaseDB, "productos");
    const productsSnapshot = await getDocs(products)
      .where("name", "==", search)
      .get();
    const productsList = productsSnapshot.docs.map((doc) => doc.data());
    return productsList;
  } catch (error) {
    console.error("Error al buscar:", error);
  }
};
