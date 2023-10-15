import axios from "axios";
import { useState } from "react";

const uploadPhotoData = (url, photo) => {
  fetch(url, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(`Error uploading photo: ${error}`);
    });
};

const initialState = {
  userName: "",
  city: "",
  country: "",
  photo: null,
  error: ""
};

const useCreatePhoto = () => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const evaluateForErrors = () => {
    let errorMessages = [];
    if (!formData.userName) errorMessages.push("User name");
    if (!formData.city) errorMessages.push("City");
    if (!formData.country) errorMessages.push("Country");
    if (!formData.photo) errorMessages.push("Photo");

    const error = errorMessages.length > 0
      ? `${errorMessages.join(', ')} ${errorMessages.length > 1 ? 'are' : 'is'} required.`
      : "";

    return error
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = evaluateForErrors();
    
    if (error) {
      console.log(error);
      setFormData({ ...formData, error });
    } else {
      axios.post("/api/photos", {
        userId: 1,
        fullUrl: "",
        regularUrl: "",
        city: formData.city,
        country: formData.country,
        topicId: 1
      }, { proxy: { protocol: "http", host: 'localhost', port: 8001 } })
      .catch(err => console.log(err))
    }
  };

  return ({
    formData,
    handleInputChange,
    handleFileChange,
    handleSubmit
  });
};

export default useCreatePhoto; 