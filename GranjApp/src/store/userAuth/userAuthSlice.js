import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  userLogged: null,
  error: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
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

export const { setIsLogged, setUserLogged, setError } = userAuthSlice.actions;


