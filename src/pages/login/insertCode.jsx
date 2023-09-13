import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginWithCode } from '../../store/userAuth/thunks';
import './insertCode.scss';
import imgLogin from "../../assets/img-login.png";


export const InsertCode = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const login = (data) => {
        console.log(data);
        dispatch(loginWithCode(data.code));
    }
    return (
        <main className='all-conatainer-insertCode'>
             <img className="img-farmer" src={imgLogin} alt="" />
            <form className='form-container' onSubmit={handleSubmit(login)}>
                <h1 className='title'>Ingrese su código de verificación</h1>
                <label className='label-insertCode'>Código de verificación:</label>
                <input
                    className='input-insertCode'
                    type="text"
                    placeholder="Ingrese su código"
                    {...register("code")}
                />
                <button className='button-insertCode' type="submit">
                    Confirmar código
                </button>
            </form>
        </main>
    )
}
