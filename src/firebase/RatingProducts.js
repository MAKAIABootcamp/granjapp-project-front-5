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
  updateDoc,
} from "firebase/firestore/lite";

export const getRatingByProductUser = async (userId, productId) => {
  try {
    const products = query(
      collection(FirebaseDB, "valoracion"),
      where("userId", "==", userId),
      where("productId", "==", productId)
    );
    const productsSnapshot = await getDocs(products);
    if (productsSnapshot.empty) {
      return null;
    }
    return {
      id: productsSnapshot.docs[0].id,
      ...productsSnapshot.docs[0].data(),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRatingByProduct = async (productId) => {
  try {
    const products = query(
      collection(FirebaseDB, "valoracion"),
      where("productId", "==", productId)
    );
    const productsSnapshot = await getDocs(products);
    if (productsSnapshot.empty) {
      return null;
    }
    return productsSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addRating = async ({ productId, userId, ratin }) => {
  try {
    const docRef = doc(collection(FirebaseDB, "valoracion"));
    await setDoc(docRef, {
      productId,
      userId,
      ratin: parseInt(ratin),
    });
    return { ok: true, message: "Gracias por la valoración" };
  } catch (error) {
    return { ok: false, message: error };
  }
};

export const updateRating = async ({ ratinId, ratin }) => {
  try {
    const docRef = doc(FirebaseDB, "valoracion", ratinId);
    await updateDoc(docRef, {
      ratin: parseInt(ratin),
    });
    return { ok: true, message: "Gracias por la valoración" };
  } catch (error) {
    return { ok: false, message: error };
  }
};
