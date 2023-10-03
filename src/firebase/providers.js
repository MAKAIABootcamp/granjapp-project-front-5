import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "./firebaseConfig";
// import { setError, setIsLogged, setUserLogged } from "../store/auth/authslice";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore/lite";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (userType) => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult (result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,

      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const getUserById = async (uid) => {
  const userCol = doc(FirebaseDB, "usuarios",uid)
  const userDoc = await getDoc(userCol)
  if (userDoc.exists()){
    return {id:uid, ...userDoc.data()}
  }
}

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
  photoURL,
  userType,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid } = resp.user;

    await updateProfile(resp.user, { displayName, photoURL });

    await setDoc(doc(FirebaseDB, "usuarios", uid), {
      email,
      displayName,
      userType,
    });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;
    const userCol = doc(FirebaseDB, "usuarios",uid)
    const userDoc = await getDoc(userCol)
    if (userDoc.exists()){
      const userType = userDoc.data().userType
      return {
        ok: true,
        uid,
        photoURL,
        displayName,
        userType
      };
    }
    return { ok: false, errorMessage: "No existe el usuario" };
    
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
