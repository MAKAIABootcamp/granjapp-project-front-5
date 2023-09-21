import React, { useMemo } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/userAuth/thunks";
import { Google, Phone } from "@mui/icons-material";
import { Alert, Button, Grid, Typography } from "@mui/material";
import imgLogin from "../../assets/img-login.png";
import "./login.scss";

const formData = {
  email: "",
  password: "",
};

const Login = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  const redirectToLogin = () => {
    window.location.href = "loginWithCell";
  };

  return (
    <>
      <div className="all-container">
        <img className="img-farmer" src={imgLogin} alt="" />
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <div className="inputs-container">
            <input
              type="email"
              placeholder="correo@google.com"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <Grid
            container
            display={!!errorMessage ? "" : "none"}
            sx={{ mt: 1, mb: 1 }}
          >
            <Grid item xs={12}>
              <Alert severity="error">
                {"Por favor verifique sus credenciales de acceso"}
              </Alert>
            </Grid>
          </Grid>

          <button
            className="login-button"
            disabled={isAuthenticating}
            type="submit"
          >
            Login
          </button>
          <div className="toRegister-container">
            <p>No tienes una cuenta?</p>
            <Link component={RouterLink} color="inherit" to="/register">
              Crear una cuenta
            </Link>
          </div>
          <div className="provider-container">
            <Grid item xs={12} sm={6}>
              <Button
                // disabled = {isAuthenticating}
                onClick={onGoogleSignIn}
                sx={{ marginBottom: 2, background: "#70e000" }}
                className="button-google"
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                // disabled = {isAuthenticating}
                onClick={redirectToLogin}
                sx={{ marginBottom: 2, background: "#70e000" }}
                variant="contained"
                fullWidth
              >
                <Phone />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
