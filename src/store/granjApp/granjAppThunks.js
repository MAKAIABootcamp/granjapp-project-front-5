import { loadProducts } from "../../helpers/loadProducts";
import { loadPromos } from "../../helpers/loadPromos";
import {  loadTiendas } from "../../helpers/loadTiendas";
import { setProduct, setPromos, setShop } from "./granjAppSlice";

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

export const startLoadingPromos= () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const promo = await loadPromos();
        dispatch ( setPromos(promo));

        
    }

    ;
}




