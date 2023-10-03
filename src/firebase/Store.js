import { FirebaseDB } from "./firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

export const getStores = async () => {
  const products = collection(FirebaseDB, "tiendas");
  const productsSnapshot = await getDocs(products);
  const productsList = productsSnapshot.docs.map((doc) => {
    const id = doc.id;
    return { id, ...doc.data() };
  });
  return productsList;
};

export const getStoreByUser = async (userId) => {
  const productRef = query(
    collection(FirebaseDB, "Tiendas"),
    where("userId", "==", userId)
  );
  const productSnapshot = await getDocs(productRef);
  if (!productSnapshot.empty) {
    const productData = {
      id: productSnapshot.docs[0].id,
      ...productSnapshot.docs[0].data(),
    };
    return productData;
  } else {
    // El documento con el ID especificado no existe
    return null;
  }
};
