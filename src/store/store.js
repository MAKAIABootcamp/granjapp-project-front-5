import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authSlice } from "./userAuth/userAuthSlice";




//import productReducer from '../redux/productReducer';

const store = configureStore({
  reducer: {
   auth: authSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
