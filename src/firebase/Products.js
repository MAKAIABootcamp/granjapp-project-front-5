import { FirebaseDB } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore/lite";

const getProducts = async () => {
  const products = collection(FirebaseDB, "products");
  const productsSnapshot = await getDocs(products);
  const productsList = productsSnapshot.docs.map((doc) => doc.data());
  return productsList;
};

export default getProducts;
