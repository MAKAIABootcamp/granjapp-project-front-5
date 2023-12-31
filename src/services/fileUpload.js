import axios from "axios";

const fileUpload = async (file) => {
  const cloudName = "dmsbhk0px";
  const uploadPreset = "granjapp";

  const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("cloud_name", cloudName);
  console.log("form data");
  try {
    const resp = await fetch(urlCloudinary, {
      method: "post",
      body: formData,
    });

    // const resp = await axios.post(urlCloudinary);
    // console.log("response", resp);
    if (!resp.ok) return null;

    const data = await resp.json();
    return data.secure_url;
  } catch (error) {
    return null;
  }
};

export default fileUpload;
