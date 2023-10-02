import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useEffect, useContext, useState } from "react";

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <FirebaseContext.Provider value={user}>{children}</FirebaseContext.Provider>
  );
};
