import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import {
  chekingCredentials,
  login,
  logout,
  setError,
  setIsLogged,
  setUserLogged,
  setUserType,
} from "./userAuthSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSignIn = (userType) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const result = await signInWithGoogle(userType);
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startLoginWithCellPhoneNumber = ({ code }) => {
  return async (dispatch) => {
    const confirmationResult = window.confirmationResult;
    try {
      confirmationResult.confirm(code).then((result) => {
        const user = result.user.auth.currentUser;
        const authUser = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          accessToken: user.accessToken,
        };
        console.log(user);
        dispatch(setUserLogged(authUser));
        dispatch(setIsLogged(true));
      });
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
  photoURL,
  userType,
}) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const { ok, uid, errorMessage } = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
      photoURL,
      userType,
    });

    if (!ok) return dispatch(logout({ errorMessage }));
    else return dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    } else {
      dispatch(setUserType(result.userType));
      return dispatch(login(result));
    }
  };
};

export const loginWithCode = (code) => {
  return async (dispatch) => {
    const confirmationResult = window.confirmationResult;
    try {
      confirmationResult.confirm(code).then((result) => {
        const user = result.user.auth.currentUser;
        const authUser = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          accessToken: user.accessToken,
        };
        console.log(user);
        dispatch(setUserLogged(authUser));
        dispatch(setIsLogged(true));
        dispatch(setError(false));
      });
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({ errorMessage: null }));
  };
};
