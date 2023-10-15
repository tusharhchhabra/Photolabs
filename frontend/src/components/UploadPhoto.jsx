import useCreatePhoto from 'hooks/useCreatePhoto';
import React, { Fragment } from 'react';
import '../styles/UploadPhoto.scss';

export default function UploadPhoto() {
  const {
    formData,
    handleFileChange,
    handleInputChange,
    handleSubmit,
  } = useCreatePhoto();


  return (
    <div className='upload-photo'>
      <div className='upload-photo-content'>
        <p className='section-heading'>Upload Photo</p>
        
        <label htmlFor="userName" className="upload-photo-label-name">
          Your Name
        </label>
        <input
          type="text"
          name="userName"
          className='upload-photo-input-text'
          value={formData.userName}
          onChange={handleInputChange}
        />

        <label htmlFor="city" className="upload-photo-label-city">
          City
        </label>
        <input
          type="text"
          name="city"
          className='upload-photo-input-text'
          value={formData.city}
          onChange={handleInputChange}
        />

        <label htmlFor="country" className="upload-photo-label-country">
          Country
        </label>
        <input
          type="text"
          name="country"
          className='upload-photo-input-text'
          value={formData.country}
          onChange={handleInputChange}
        />

        <input
          type="file"
          accept="image/*"
          className='upload-photo-input-file'
          onChange={handleFileChange}
        />
        {formData.photo &&
          <div className='photo-preview'>
            <p className='photo-preview-heading'>Preview</p>
            <img
              src={URL.createObjectURL(formData.photo)}
              alt="Preview"
              className='upload-photo-preview'
            />
          </div>}

        <button
          className="upload-photo-submit-button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        
        {formData.error && <p className='photo-submit-error'>{formData.error}</p>}
      </div>
    </div>
  );
}