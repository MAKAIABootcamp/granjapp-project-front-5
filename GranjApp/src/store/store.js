import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userAuthSlice } from "./userAuth/userAuthSlice";



//import productReducer from '../redux/productReducer';

const store = configureStore({
  reducer: {
   userAuth: userAuthSlice.reducer,
  },
  middleware: [thunk],
});

export default store;
