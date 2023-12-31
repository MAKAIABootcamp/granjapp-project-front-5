import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FirebaseAuth } from "../firebase/firebaseConfig";
import { login, logout, selectAddress } from "../store/userAuth/userAuthSlice";
import {
  startLoadingCar,
  startLoadingPosts,
  startLoadingProducts,
  startLoadingPromos,
  startLoadingSales,
  startLoadingShops,
} from "../store/granjApp/granjAppThunks";
import { getUserById } from "../firebase/providers";
import { useState } from "react";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const addressRef = useSelector(selectAddress)

  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      const userDoc = await getUserById(uid);

      setUser({
        address: localStorage.getItem("address") || addressRef,
        ...userDoc,
      });

      dispatch(
        login({
          uid,
          email,
          displayName,
          photoURL,
          userType: userDoc.userType,
          address: localStorage.getItem("address") || addressRef,
        })
      );
      // dispatch(setUserType(userDoc.userType))
      dispatch(await startLoadingSales());
      dispatch(await startLoadingShops());
      dispatch(await startLoadingProducts());
      dispatch(await startLoadingPromos());
      dispatch(await  startLoadingCar());
    });
  }, []);
  return {
    status,
    user,
  };
};
// ,userType:userDoc.userType
