import { onAuthStateChanged } from "firebase/auth";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { FirebaseAuth } from "../firebase/firebaseConfig";
import { login, logout, setUserType } from "../store/userAuth/userAuthSlice";
import { startLoadingPosts, startLoadingProducts, startLoadingPromos, startLoadingShops } from "../store/granjApp/granjAppThunks";
import { getUserById } from "../firebase/providers";
import { useState } from "react";


export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const  [user, setUser] = useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      const userDoc = await getUserById(uid);
      console.log(userDoc, uid);
      setUser(userDoc)

      dispatch(login({ uid, email, displayName, photoURL }));
      // dispatch(setUserType(userDoc.userType))
      dispatch(startLoadingShops());
      dispatch(startLoadingProducts());
      dispatch(startLoadingPromos());
      dispatch(startLoadingPosts())
    });
  }, []);

  return{
    status,user
  }
};
// ,userType:userDoc.userType