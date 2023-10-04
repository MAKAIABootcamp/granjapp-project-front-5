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
} from "firebase/firestore/lite";

// import {
//   getDownloadURL,
//   ref as storageRef,
//   uploadBytes,
// } from "firebase/storage";
// import Swal from "sweetalert2";

export const getProducts = async () => {
  const products = collection(FirebaseDB, "productos");
  const productsSnapshot = await getDocs(products);
  const productsList = productsSnapshot.docs.map((doc) => {
    const id = doc.id;
    return { id, ...doc.data() };
  });
  return productsList;
};

// const uploadProduct = async (uid, imageUpload) => {
//   if (imageUpload === null) {
//     Swal.fire("Please select an image");
//     return;
//   }
//   const imageRef = storageRef(storage, `productos/${uid}`);
//   await uploadBytes(imageRef, imageUpload)
//     .then((snapshot) => {
//       getDownloadURL(snapshot.ref)
//         .then((url) => {
//           saveData(url);
//         })
//         .catch((error) => {
//           Swal.fire({
//             title: error.message,
//             icon: "error",
//             timer: 2000,
//           });
//         });
//     })
//     .catch((error) => {
//       Swal.fire({
//         title: error.message,
//         icon: "error",
//         timer: 2000,
//       });
//     });
// };

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
  const docRef = doc(collection(FirebaseDB, "productos"));
  console.log(docRef);
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
  // await uploadProduct(docRef.id, url);
};

export const deleteProduct = async (productId) => {
  try {
    const docRef = doc(FirebaseDB, "productos", productId);
    await deleteDoc(docRef);
    return {ok:true, message:"Produto eliminado exitosamente"}
  } catch (error) {
    return {ok:false, message:error}
  }
};

export const getProductById = async (productId) => {
  const productRef = doc(FirebaseDB, "productos/" + productId);
  const productSnapshot = await getDoc(productRef);

  if (productSnapshot.exists()) {
    const productData = {id:productSnapshot.id,...productSnapshot.data()};
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
