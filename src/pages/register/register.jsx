import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Link as RouterLink } from "react-router-dom";
import { startCreatingUserWithEmailPassword } from "../../store/userAuth/thunks";
import fileUpload from "../../services/fileUpload";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { styled } from "@mui/material/styles";
import {
  Alert,
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import imgLogin from "../../assets/img-login.png";
import "./register.scss";

const formData = {
  email: "",
  password: "",
  displayName: "",
  userType: "comprador",
  photoURL: "",
};

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const formValidations = {
  email: [(value) => regexEmail.test(value), "Ingrese un correo válido"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe contener mas de 6 caracteres.",
  ],
  photoURL: [
    (value) => value.startsWith("http") || value === "",
    "Ingrese una URL válida o deje en blanco.",
  ],
  displayName: [(value) => value.length >= 1, "Este es un campo obligatorio."],
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [image, setImage] = useState([]);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    formState,
    displayName,
    email,
    password,
    userType,
    // photoURL,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    // photoURLValid,
  } = useForm(formData, formValidations);

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    console.log(userType);
    if (!isFormValid) return;
    const photoURL = await fileUpload(image[0]);

    const valur = dispatch(
      startCreatingUserWithEmailPassword({
        ...formState,
        photoURL,
        userType,
      })
    );
    if (valur.type == "auth/logout") {
      Swal.fire({
        title: "Error de creación",
        text: valur.payload,
        timer: 3000,
        icon: "error",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="all-container-register mx-auto w-[40%] h-full">
        <img className="img-farmer" src={imgLogin} alt="" />
        <h1 className="register-title">Registro </h1>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
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
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
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
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Ingrese Foto
                <VisuallyHiddenInput
                  type="file"
                  // value={image}
                  onChange={(e) => {
                    console.log(e.target.files);
                    setImage([...e.target.files]);
                  }}
                />
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <FormLabel id="row-radio-buttons-group">
                Tipo de usuario
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="row-radio-buttons-group-label"
                name="userType"
                value={userType}
                onChange={onInputChange}
              >
                <FormControlLabel
                  defaultChecked
                  defaultValue
                  value="comprador"
                  control={<Radio />}
                  label="Comprador"
                />
                <FormControlLabel
                  value="vendedor"
                  control={<Radio />}
                  label="Vendedor"
                />
              </RadioGroup>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>

              <Grid item xs={12}>
                <Button
                  disabled={isCheckingAuthentication}
                  sx={{ background: "#70e000" }}
                  type="submit"
                  variant="contained"
                  className="mx-auto"
                  fullWidth
                >
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <hr />
        <Grid
          container
          direction="column"
          alignItems={"center"}
          justifyContent="center"
          textAlign={"center"}
          padding={2}
        >
          <Grid item xs={12} />
          <Typography className="mx-auto flex justify-center items-center">
            ¿Ya tienes cuenta?
          </Typography>
          <Link
            component={RouterLink}
            className="ingresar mx-auto border-b-2 hover:bg-green-700 p-2"
            color="inherit"
            to="/login"
          >
            ingresar
          </Link>
        </Grid>
      </div>
    </>
  );
};

export default Register;
