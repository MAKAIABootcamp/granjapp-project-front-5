import { createSlice } from "@reduxjs/toolkit";

export const granjAppSlice = createSlice({
  name: "granjApp",
  initialState: {
    
    shop: [],
    activeShop: null,
    product: [],
    activeProduct: null,
    promos: [],
    activePromos:null,

  },
  reducers: {
    setActiveShop: (state, action) => {
      state.activeShop = action.payload;
    },

    setShop: (state, action) => {
      state.shop = action.payload;
    },

    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    },

    setProduct: (state, action) => {
      state.product = action.payload;
    },

    setActivePromos: (state, action) => {
      state.activePromos = action.payload;
    },

    setPromos: (state, action) => {
      state.promos = action.payload;
    },
  
  },
});
// Action creators are generated for each case reducer function
export const { setActiveShop, setShop, setActiveProduct, setProduct, setPromos, setActivePromos } = granjAppSlice.actions;

