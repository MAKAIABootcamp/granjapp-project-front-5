
// import { ImageGallery } from '../components'

import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm"; 
import { useDispatch, useSelector } from "react-redux";
import { setActivePost } from "../../store/granjApp/granjAppSlice";
import { startSavePost } from "../../store/granjApp/granjAppThunks";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";


export const NewPost = () => {


    const {onInputChange, formState} = useForm();
 
     const onSavePost = () => {
        console.log(formState)
        }
  return (
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{ 
            mb: 1,
            backgroundColor: 'white',
            width: '500px',
            borderRadius: '20px',
            marginTop: '20px',
            marginLeft: '8px'

         }}
        className='animate__animated animate__fadeIn animate__faster'
    >
        <Grid item>
            <Typography fontSize={ 25 } fontWeight='light' mt={5} ml={5} >New Post</Typography>
        </Grid>
        <Grid item>
            <Button 
            onClick={onSavePost}
            color="primary"  
            sx={{ padding: 2, marginTop: '40px'}} >
                <SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid 
        container
        sx={{justifyContent:'center'}}

        >
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="URL de la foto"
                name='image'
                value={formState.image}
                onChange={onInputChange}
                sx={{ 
                    border: 'none',
                    mb: 1,
                    width: '300px' 
                }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Añade una descripción"
                minRows={ 2 }
                name='description'
                value={formState.description}
                onChange={onInputChange}
                sx={{
                    marginBottom: '20px',
                    width: '300px',
                }}
            />
        </Grid>

        {/* Image gallery */}
        {/* <ImageGallery /> */}

    </Grid>
  )
}