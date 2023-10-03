import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Alert,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "../../../../hooks/useForm";
import { Textarea } from "@mui/joy";
import { addProduct } from "../../../../firebase/Products";
import fileUpload from "../../../../services/fileUpload";
import Swal from "sweetalert2";
// import "@sweetalert/themes/default.css";

const formData = {
  name: "",
  cost: undefined,
  description: "",
  unity: "kg",
  variety: "Frutas",
  weight: undefined,
};

const formValidations = {
  name: [
    (value) => value.length > 1,
    "El nombre debe contener al menos 2 caracteres",
  ],
  description: [
    (value) => value.length >= 20,
    "La descripción debe contener mas de 20 caracteres.",
  ],
  variety: [(value) => value.length > 0, "Este es un campo obligatorio."],
  cost: [(value) => value > 50, "Este es un campo obligatorio."],
  unity: [(value) => value.length >= 1, "Este es un campo obligatorio."],
  weight: [(value) => value > 0, "Este es un campo obligatorio."],
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

const ProductForm = ({ storeId }) => {
  const navigate = useNavigate();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [image, setImage] = useState(null);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    name,
    cost,
    description,
    unity,
    variety,
    weight,
    onInputChange,
    isFormValid,
    nameValid,
    descriptionValid,
    varietyValid,
    costValid,
    unityValid,
    weightValid,
  } = useForm(formData, formValidations);

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    if (image) {
      const imageProduct = await fileUpload(image);
      console.log(imageProduct);
      await addProduct({
        name,
        description,
        cost,
        storeId,
        unity,
        url: imageProduct,
        variety,
        weight,
      });
      Swal.fire({
        icon: "success",
        title: "El producto ha sido guardado con éxito!",
        showConfirmButton: false,
        timer: 1000,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <div className="all-container-register mx-auto w-[60%] h-full">
        <h1 className="register-title text-xl py-2">Ingresar nuevo producto</h1>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Nombre del producto"
                type="text"
                placeholder="Nombre del producto"
                fullWidth
                name="name"
                value={name}
                onChange={onInputChange}
                error={!!nameValid && formSubmitted}
                helperText={nameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Textarea
                minRows={4}
                label="Descripción del producto"
                type="text"
                placeholder="Descripción del producto"
                name="description"
                value={description}
                onChange={onInputChange}
                error={!!descriptionValid && formSubmitted}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Precio del producto"
                type="number"
                placeholder="Precio del producto"
                fullWidth
                name="cost"
                value={cost}
                onChange={onInputChange}
                error={!!costValid && formSubmitted}
                helperText={costValid}
              />
            </Grid>

            <Grid
              container
              sx={{ mt: 2 }}
              className="mx-auto flex items-center justify-between"
            >
              <Grid item xs={3} className="pr-10">
                <Select
                  labelId="variety"
                  id="variety"
                  fullWidth
                  name={"variety"}
                  value={variety}
                  label="Categoria del producto"
                  onChange={onInputChange}
                >
                  <MenuItem value={"Frutas"}>Frutas</MenuItem>
                  <MenuItem value={"Hortalizas"}>Hortalizas</MenuItem>
                  <MenuItem value={"Huevos y Lacteos"}>Huevos y Lácteos</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Cantidad por unidad"
                  type="number"
                  placeholder="Cantidad por unidad"
                  fullWidth
                  name="weight"
                  value={weight}
                  onChange={onInputChange}
                  error={!!weightValid && formSubmitted}
                />
              </Grid>
              <Grid item xs={3}>
                <Select
                  labelId="unity"
                  id="unity"
                  value={unity}
                  name={"unity"}
                  label="Unidad del producto"
                  onChange={onInputChange}
                >
                  <MenuItem value={"kg"}>kg</MenuItem>
                  <MenuItem value={"gr"}>gr</MenuItem>
                  <MenuItem value={"lb"}>lb</MenuItem>
                  <MenuItem value={"l"}>l</MenuItem>
                  <MenuItem value={"ml"}>ml</MenuItem>
                  <MenuItem value={"unid"}>unid</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                >
                  Ingrese Imagen
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  disabled={isCheckingAuthentication}
                  sx={{
                    background: "#70e000",
                    width: "70%",
                    display: "flex",
                    margin: "auto",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Añadir Producto
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default ProductForm;
