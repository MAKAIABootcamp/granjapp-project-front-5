import { createSlice } from "@reduxjs/toolkit";

export const granjAppSlice = createSlice({
  name: "granjApp",
  initialState: {
    shop: [],
    activeShop: null,
    product: [],
    activeProduct: null,
    promos: [],
    activePromos: null,
    posts: [],
    activePost: null,
    isSaving: false,
    newPost: [],
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

    setActivePost: (state, action) => {
      state.activePost = action.payload;
    },

    setPosts: (state, action) => {
      state.posts = action.payload;
    },

    savingNewPost: (state) => {
      state.isSaving = true;
    },

    addNewEmptyPost: (state, action) => {
      state.newPost.push(action.payload);
      state.isSaving = false;
    },

    updatePost: (state, action) => {
      state.isSaving = false;
      state.newPost = state.newPost.map( post => {

          if (post.id === action.payload.id) {

              return action.payload;

          }

          return post;
      });
      // state.messageSaved = `${ action.payload.ti}`
 },

 setSaving: (state) => {
  state.isSaving = true;
 }
  },
});

export const selectProducts = (state) => state.granjApp.product
// Action creators are generated for each case reducer function
export const {
  setActiveShop,
  setShop,
  setActiveProduct,
  setProduct,
  setPromos,
  setActivePromos,
  setActivePost,
  setPosts,
  savingNewPost,
  addNewEmptyPost,
  updatePost,
  setSaving,
} = granjAppSlice.actions;
