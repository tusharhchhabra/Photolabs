import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (
  {
    photo,
    favoritePhotos,
    removeModal,
    toggleFavorite,
    showPhotoDetails
  }) => {

  const { urls, user, location, similar_photos } = photo;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => removeModal()} />
      </button>

      <img
        src={urls.full} alt="Full photo"
        className='photo-details-modal__image'
        onClick={() => hideModal()}
      />

      <PhotoFavButton
        photoId={photo.id}
        isFavorite={!!favoritePhotos.find(fav => fav.id === photo.id)}
        toggleFavorite={toggleFavorite}
      />

      <section className='photo-details-modal__photographer-details'>
        <img
          src={user.profile}
          alt=""
          className="photo-details-modal__photographer-profile"
        />
        <div className="photo-details-modal__photographer-info">
          {user.name}<br />
          <span className="photo-details-modal__photographer-location">
            {location.city}, {location.country}
          </span>
        </div>
      </section>

      {similar_photos &&
        <span className="photo-details-modal__header">
          Similar Photos
        </span>
      }

      {similar_photos &&
        <PhotoList
          photos={Object.values(similar_photos)}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
          showPhotoDetails={showPhotoDetails}
        />}
    </div>
  );
};

export default PhotoDetailsModal;
