import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  market: null,
  products: [],
  sales: [],
};

export const salesSlice = createSlice({
  name: "Sales",
  initialState: initialValues,
  reducers: {
    setMarket: (state, action) => {
      state.market = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSales: (state, action) => {
      state.sales = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMarket, setProducts, setSales } = salesSlice.actions;
