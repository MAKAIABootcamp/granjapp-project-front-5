
import { useForm } from "react-hook-form";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FirebaseAuth } from "../../firebase/firebaseConfig";
import "./loginByPhone.scss";
import imgLogin from "../../assets/img-login.png";
// import logo from '../../assets/Logo.svg';


const LoginByPhone = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  //Función que genera el recaptcha

  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        FirebaseAuth,
        "recaptch-container",
        {
          size: "invisible",
          callback: () => {},
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Función que envía el código de verificación
  const sendSms = (number, recaptchaVerifier) => {
    signInWithPhoneNumber(FirebaseAuth, `+57${number}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response;
        console.log(response);
        Swal.fire(
          "Excelente",
          `Te enviaremos un mensaje para confirmar a ${number}`,
          "success"
        );
      })
      .then(() => {
        navigate("/insertcode");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ops!",
          `Ocurrió un error al realizar tu solicitud ${error.message}`,
          "error"
        );
      });
  };

  const onSubmit = (data) => {
    // //genera el recaptcha
    generateRecaptcha(data.phone);
    const appVerifier = window.recaptchaVerifier;
    sendSms(data.phone, appVerifier);
    
  };

  return (
    <main className="loginByPhone">
      <div className="formulario-container">
        <img className="img-farmer" src={imgLogin} alt="" />
        <h1 className="h1">Inicio de sesión por número celular</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">Número celular:</label>
          <div className="input-button-container">
            <input
              className="input"
              type="text"
              placeholder="Ingrese su número celular"
              {...register("phone")}
            />
            <button className="button" type="submit">
              Enviar SMS
            </button>
          </div>
        </form>
        <div id="recaptch-container"></div>
      </div>
    </main>
   
  );
};

export default LoginByPhone;
