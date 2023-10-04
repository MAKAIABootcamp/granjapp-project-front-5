import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authSlice } from "./userAuth/userAuthSlice";
import { granjAppSlice } from "./granjApp/granjAppSlice";
import { salesSlice } from "./sales/salesSlice";
//import productReducer from '../redux/productReducer';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    granjApp: granjAppSlice.reducer,
    sales: salesSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
