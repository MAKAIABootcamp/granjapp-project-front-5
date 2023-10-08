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
    activePost: false,
    isSaving: false,
    newPost: [],
    cart: [],
    processedPurchase: null,
    compras: [],
    activePurchasedProduct: null,
  },
  reducers: {
    setLikes: (state, action) => {
      state.posts = state.posts.map((item) => {
        if (action.payload.id == item.id) {
          return action.payload;
        }
        return item;
      });
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    setCompras: (state, action) => {
      state.compras = action.payload;
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

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
      state.newPost = state.newPost.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }

        return post;
      });
      // state.messageSaved = `${ action.payload.ti}`
    },

    setSaving: (state) => {
      state.isSaving = true;
    },

    setProcessedPurchase: (state, action) => {
      state.processedPurchase = action.payload;
    },

    updateCartItemQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      console.log("productId", productId);
      console.log("newQuantity", newQuantity);
      // Encuentra el elemento en el carrito con productId y actualiza la cantidad
      const updatedItems = state.cart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
      console.log("updatedItems", updatedItems);
      state.cart = updatedItems;
    },

    updateCartItemSubtotal: (state, action) => {
      const { productId, newSubtotal } = action.payload;

      // Encuentra el elemento en el carrito con productId y actualiza el subtotal
      const updatedItems = state.cart.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            subtotal: newSubtotal,
          };
        }
        return item;
      });

      state.cart = updatedItems;
    },

    updateCartItemTotal: (state, action) => {
      const { productId, newTotal } = action.payload;

      // Encuentra el elemento en el carrito con productId y actualiza el subtotal
      const updatedItems = state.cart.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            total: newTotal,
          };
        }
        return item;
      });

      state.cart = updatedItems;
    },

    setActivePurchasedProduct: (state, action) => {
      state.activePurchasedProduct = action.payload;
    },
  },
});

export const selectProducts = (state) => state.granjApp.product;
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
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  updateCartItemSubtotal,
  updateCartItemTotal,
  setProcessedPurchase,
  setCompras,
  setActivePurchasedProduct,
  setLikes
} = granjAppSlice.actions;
