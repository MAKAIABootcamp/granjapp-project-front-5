import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FirebaseAuth } from "../firebase/firebaseConfig";
import { login, logout } from "../store/userAuth/userAuthSlice";
import { startLoadingProducts, startLoadingShops } from "../store/granjApp/granjAppThunks";


export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;

      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingShops());
      dispatch(startLoadingProducts());
    });
  }, []);

  return{
    status
  }
};
