import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewPost } from "../../store/granjApp/granjAppThunks";
import fileUpload from "../../services/fileUpload";
import logoGranjApp from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({});
  const [image, setImage] = useState("");
  const { photoURL, displayName, uid } = useSelector((store) => store.auth);

  const onInputChange = async (e) => {
    const { name, value, type } = e.target;
    console.log(type);
    if (type === "file") {
      const img = await fileUpload(e.target.files[0]);
      setImage((prevState) => (img ? img : prevState));
    }
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const resetForm = () => {
    setDataForm({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = Date.now();
    const newPost = {
      ...dataForm,
      image: image,
      photoURL,
      displayName,
      uid,
      creationDate: new Date(date).toUTCString(),
      likes: [],
    };
    console.log(newPost);
    dispatch(startNewPost(newPost));
    resetForm();
    window.location.reload();

  };

  return (
    <>
      <div className="allComponent-container">
        <figure className="imageForm-container">
          <img src={image ? image : logoGranjApp} alt="nueva foto" />
        </figure>
        <form className="form-container" onSubmit={handleSubmit}>
          <label>Descripción</label>
          <input
            id="input-description"
            type="text"
            name="caption"
            value={dataForm.caption || ""}
            onChange={onInputChange}
          />
          <label>Cargar imagen</label>
          <input className="selectImg-button" type="file" name="image" onChange={onInputChange} />
          <div className="sendPost-container">
          <button className="sendPost" type="submit">Enviar post</button>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default PostForm;
