import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //'not-authenticated' , 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    userType: null,
    photoURL: null,
    numberCell: null,
    errorMessage: null,
    address: "Rionegro, Antioquia",
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated"; //'not-authenticated' , 'authenticated'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.userType = payload.userType;
      state.photoURL = payload.photoURL;
      state.numberCell = payload.numberCell;
      state.errorMessage = payload.errorMessage;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated"; //'not-authenticated' , 'authenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.userType = null;
      state.photoURL = null;
      state.numberCell = null;
      state.errorMessage = payload?.errorMessage;
    },
    chekingCredentials: (state) => {
      state.status = "checking";
    },

    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setUserLogged: (state, action) => {
      state.userLogged = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },

    setUserType: (state, action) => {
      state.userType = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  chekingCredentials,
  setIsLogged,
  setUserLogged,
  setAddress,
  setUserType,
  setError,
} = authSlice.actions;

// Export the selector to access the address
export const selectAddress = (state) => state.auth.address;

export const selectUser = (state) => state.auth;

export default authSlice.reducer;
