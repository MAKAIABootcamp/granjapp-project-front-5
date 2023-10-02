import { collection, doc, setDoc } from "firebase/firestore/lite";
import { loadPosts } from "../../helpers/loadPosts";
import { loadProducts } from "../../helpers/loadProducts";
import { loadPromos } from "../../helpers/loadPromos";
import {  loadTiendas } from "../../helpers/loadTiendas";
import { addNewEmptyPost, savingNewPost, setActivePost, setPosts, setProduct, setPromos, setSaving, setShop, updatePost } from "./granjAppSlice";
import { FirebaseDB } from "../../firebase/firebaseConfig";

export const startLoadingShops = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const shop = await loadTiendas();
        dispatch ( setShop(shop));

        
    }

    ;
}

export const startLoadingProducts= () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const shop = await loadProducts();
        dispatch ( setProduct(shop));

        
    }

    ;
}

export const saveProducts= () => {

    return async (shop,dispatch) => {
        dispatch (setProduct(shop));
    }

    ;
}

export const startLoadingPromos= () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const promo = await loadPromos();
        dispatch ( setPromos(promo));

        
    }

    ;
}

export const startLoadingPosts= () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const post= await loadPosts();
        dispatch ( setPosts(post));

        
    }

    ;
}

export const startNewPost = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewPost());

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const newPost = {
            addImage : [],
            image: "",
            description: "",
        }
        
        const newDoc = doc ( collection (FirebaseDB, `posts`));
         await setDoc( newDoc, newPost);

        newPost.id = newDoc.id;

        dispatch(addNewEmptyPost( newPost));
        dispatch(setActivePost( newPost));
        

    }
}

export const startSavePost = () => {
    return async ( dispatch, getState) => {

        dispatch (setSaving());

        
        const {activePost:post} = getState().granjApp;

        const postToFireStore = { ...post };
        delete postToFireStore.id;

        const docRef = doc (FirebaseDB, `posts/${post.id}`);
        await setDoc (docRef, postToFireStore, {merge: true} );

        dispatch ( updatePost(post) );
    }
}





