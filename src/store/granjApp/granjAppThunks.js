import { loadProducts } from "../../helpers/loadProducts";
import {  loadTiendas } from "../../helpers/loadTiendas";
import { setProduct, setShop } from "./granjAppSlice";

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



