import { where } from "@firebase/firestore";
import { FirebaseDB } from "./firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
} from "firebase/firestore/lite";

export const getProducts = async () => {
  const products = collection(FirebaseDB, "productos");
  const productsSnapshot = await getDocs(products);
  const productsList = productsSnapshot.docs.map((doc) => doc.data());
  return productsList;
};

export const getProductById = async (productId) => {
  const productRef = doc(FirebaseDB, "productos/" + productId);
  const productSnapshot = await getDoc(productRef);

  if (productSnapshot.exists()) {
    const productData = productSnapshot.data();
    return productData;
  } else {
    // El documento con el ID especificado no existe
    return null;
  }
};
