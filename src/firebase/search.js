import { FirebaseDB } from "./firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

export const getSearchesStores = async (search) => {
  try {
    const stores = collection(FirebaseDB, "Tiendas");
    const storesSnapshot = await getDocs(stores);
    const storesData = storesSnapshot.docs
      .map((doc) => {
        const id = doc.id;
        return { id, ...doc.data() };
      })
      .filter((data) =>
        String(data.title).toLowerCase().includes(String(search).toLowerCase())
      );

    return storesData;
  } catch (error) {
    console.error("Error al buscar:", error);
    return [];
  }
};

export const getSearchProduct = async (search) => {
  try {
    const products = query(collection(FirebaseDB, "productos"));
    const productsSnapshot = await getDocs(products);
    const storesData = productsSnapshot.docs
      .map((doc) => {
        const id = doc.id;
        return { id, ...doc.data() };
      })
      .filter((data) => data.name.toLowerCase().includes(search));
    return storesData;
  } catch (error) {
    console.error("Error al buscar:", error);
    return [];
  }
};
