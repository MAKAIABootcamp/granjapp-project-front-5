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

export const getProducts = async () => {
  const products = collection(FirebaseDB, "productos");
  const productsSnapshot = await getDocs(products);
  const productsList = productsSnapshot.docs.map((doc) => {
    const id = doc.id;
    return { id, ...doc.data() };
  });
  return productsList;
};

export const addProduct = async ({
  name,
  description,
  cost,
  storeId,
  unity,
  url,
  variety,
  weight,
}) => {
  try {
    const docRef = doc(collection(FirebaseDB, "productos"));
    await setDoc(docRef, {
      name,
      description,
      cost,
      storeId,
      url,
      unity,
      variety,
      weight,
    });
    return { ok: true, message: "¡Producto creado exitósamente! :)" };
  } catch (error) {
    return { ok: true, message: e };
  }
  // await uploadProduct(docRef.id, url);
};

export const deleteProduct = async (productId) => {
  try {
    const docRef = doc(FirebaseDB, "productos", productId);
    await deleteDoc(docRef);
    return { ok: true, message: "Produto eliminado exitosamente" };
  } catch (error) {
    return { ok: false, message: error };
  }
};

export const updateProduct = async (productId, data) => {
  try {
    console.log(data);
    const docRef = doc(FirebaseDB, "productos", productId);
    await updateDoc(docRef, data);
    return { ok: true, message: "Produto actualizado exitosamente" };
  } catch (error) {
    return { ok: false, message: error };
  }
};

export const getProductById = async (productId) => {
  const productRef = doc(FirebaseDB, "productos/" + productId);
  const productSnapshot = await getDoc(productRef);
  console.log(productSnapshot);
  if (productSnapshot.exists()) {
    const productData = { id: productSnapshot.id, ...productSnapshot.data() };
    return productData;
  } else {
    // El documento con el ID especificado no existe
    return null;
  }
};

export const getProductByCategorie = async (productCategorie) => {
  const products = query(
    collection(FirebaseDB, "productos"),
    where("variety", "==", productCategorie)
  );
  const productsSnapshot = await getDocs(products);
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
