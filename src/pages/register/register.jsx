import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Link as RouterLink } from "react-router-dom";
import { startCreatingUserWithEmailPassword } from "../../store/userAuth/thunks";
import { useForm } from "../../hooks/useForm";
import imgLogin from "../../assets/img-login.png";
import "./register.scss";

const formData = {
  email: '',
  password: '',
  displayName: '',
  photoURL: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe contener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe contener mas de 6 caracteres.'],
  photoURL: [(value) => value.startsWith('http') || value === '', 'Ingrese una URL válida o deje en blanco.'],
  displayName: [(value) => value.length >= 1, 'Este es un campo obligatorio.'],
}


const Register = () => {

  const dispatch = useDispatch();
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo (() => status === 'checking', [status]);

  const {formState, displayName, email, password, photoURL, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid, photoURLValid
        } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
    <>
      <div className="all-container-register">
        <img className="img-farmer" src={imgLogin} alt="" />
        <h1 className="register-title">Registro </h1>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} >
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange }
                error= { !!displayNameValid && formSubmitted } 
                helperText = {displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange }
                error= { !!emailValid && formSubmitted } 
                helperText = {emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange }
                error= { !!passwordValid && formSubmitted } 
                helperText = {passwordValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Foto de Perfil (URL)"
                type="url"
                placeholder="https://example.com/imagen.jpg"
                fullWidth
                name="photoURL"
                value={photoURL}
                onChange={onInputChange}
                error= { !!photoURLValid && formSubmitted } 
                helperText = {photoURLValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button 
              disabled = {isCheckingAuthentication}
              sx={{background: '#70e000'}} 
              type="submit" variant="contained" 
              fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} className="ingresar" color="inherit" to="/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
        </form>
      </div>
    </>
  );
};

export default Register;
