import React, { useMemo, useState } from "react";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/userAuth/thunks";
import { Google, Phone } from "@mui/icons-material";
import { Alert, Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import imgLogin from "../../assets/img-login.png";
import "./login.scss";
import { selectUser } from "../../store/userAuth/userAuthSlice";
import Swal from "sweetalert2";

const formData = {
  email: "",
  password: ""
};

const Login = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const dispatch = useDispatch();
  const navigate = useNavigate()



  const onSubmit = async (event) => {
    event.preventDefault();
    const valur =await dispatch(startLoginWithEmailPassword({ email, password }));
    if (valur.type == "auth/logout"){
      Swal.fire({
        title:"Datos incorrectos",
        text:valur.payload,
        timer:3000,
        icon: "error"
      })
    }
    else{
      navigate("/")
    }
    
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
      <div className="all-container flex-col mx-auto justify-center py-3 mt-10 h-full lg:w-[30%] md:w-[50%] sm:w-[80%] items-center ">
        <img className="img-farmer rounded-lg p-2" src={imgLogin} alt="" />
        <form onSubmit={onSubmit}>
          <h1>Iniciar sesión</h1>
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
            Iniciar sesión
          </button>
          <div className="toRegister-container flex-col">
            <p className="align-center flex text-[16px]">
              ¿No tienes una cuenta?
            </p>
            <Link
              component={RouterLink}
              className="m-2"
              color="inherit"
              to="/register"
            >
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
                <Typography sx={{ ml: 1 }}>Teléfono</Typography>
              </Button>
            </Grid>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
