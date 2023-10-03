import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { loadPosts } from "../../helpers/loadPosts";
import { loadProducts } from "../../helpers/loadProducts";
import { loadPromos } from "../../helpers/loadPromos";
import { loadTiendas } from "../../helpers/loadTiendas";
import {
  addNewEmptyPost,
  addToCart,
  removeFromCart,
  savingNewPost,
  setActivePost,
  setPosts,
  setProduct,
  setPromos,
  setSaving,
  setShop,
  updatePost,
} from "./granjAppSlice";
import { FirebaseDB } from "../../firebase/firebaseConfig";
import { updateDoc } from "firebase/firestore";

export const startLoadingShops = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const shop = await loadTiendas();
    dispatch(setShop(shop));
  };
};

export const startLoadingProducts = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const product = await loadProducts();
    dispatch(setProduct(product));
  };
};

export const startLoadingPromos = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const promo = await loadPromos();
    dispatch(setPromos(promo));
  };
};

export const startLoadingPosts = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const post = await loadPosts();
    dispatch(setPosts(post));
  };
};

export const startNewPost = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewPost());

    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const newPost = {
      addImage: [],
      image: "",
      description: "",
    };

    const newDoc = doc(collection(FirebaseDB, `posts`));
    await setDoc(newDoc, newPost);

    newPost.id = newDoc.id;

    dispatch(addNewEmptyPost(newPost));
    dispatch(setActivePost(newPost));
  };
};

export const startSavePost = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { activePost: post } = getState().granjApp;

    const postToFireStore = { ...post };
    delete postToFireStore.id;

    const docRef = doc(FirebaseDB, `posts/${post.id}`);
    await setDoc(docRef, postToFireStore, { merge: true });

    dispatch(updatePost(post));
  };
};

export const addToCartFirestore = async (item, dispatch) => {
  try {
    const cartCollection = collection(FirebaseDB, `carrito`);

    
    await addDoc(cartCollection, item);

    dispatch(addToCart(item));
    console.log("Elemento agregado a la colección de carrito Firestore.");
  } catch (error) {
    console.error(
      "Error al agregar elemento a la colección de carrito Firestore:",
      error
    );
  }
};


export const updateCartFirestore = async ( productId, newQuantity) => {
  try {
    const cartItemRef = doc(FirebaseDB, "carrito", productId);

  
    await updateDoc(cartItemRef, {
      quantity: newQuantity,
      subtotal: item.price * newQuantity, 
    });

    console.log("Cantidad del producto actualizada con éxito en Firestore.");
  } catch (error) {
    console.error("Error al actualizar la cantidad del producto en Firestore:", error);
  }
};

export const removeCartItemFirestore = async (item, dispatch) => {
  try {
    const cartItemRef = doc(FirebaseDB, `carrito/${item.id}`);


    await deleteDoc(cartItemRef);

    dispatch(removeFromCart(item.id));

    console.log("Producto eliminado del carrito con éxito en Firestore.");
  } catch (error) {
    console.error("Error al eliminar el producto del carrito en Firestore:", error);
  }
};
