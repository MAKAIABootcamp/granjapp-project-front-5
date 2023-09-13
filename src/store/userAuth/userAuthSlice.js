import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //'not-authenticated' , 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    numberCell: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      (state.status = "authenticated"), //'not-authenticated' , 'authenticated'
        (state.uid = payload.uid);
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.numberCell = payload.numberCell;
      state.errorMessage = payload.errorMessage;
    },

    logout: (state, { payload }) => {
      (state.status = "not-authenticated"), //'not-authenticated' , 'authenticated'
        (state.uid = null);
      state.email = null;
      state.displayName = null;
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
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials, setIsLogged, setUserLogged, setError } = authSlice.actions;
