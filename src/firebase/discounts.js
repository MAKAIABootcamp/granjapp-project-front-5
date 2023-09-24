import { FirebaseDB } from "./firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
} from "firebase/firestore/lite";

export const getDiscounts = async () => {
  const discounts = collection(FirebaseDB, "promociones");
  const productsSnapshot = await getDocs(discounts);
  const discountList = productsSnapshot.docs.map((doc) => doc.data());
  return discountList;
};

export const getPromoById = async (promoId) => {
  const promoRef = doc(FirebaseDB, "promociones/" + promoId);
  const promoSnapshot = await getDoc(promoRef);

  if (promoSnapshot.exists()) {
    const promoData = promoSnapshot.data();
    return promoData;
  } else {
    // El documento con el ID especificado no existe
    return null;
  }
};
