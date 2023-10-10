import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoUserDetails from "./PhotoUserDetails";

const PhotoListItem = ({ photo, isFavorite, toggleFavorite, showPhotoDetails }) => {
  const { location, urls, user } = photo;

  return (
    <div className="photo-list__item" onClick={() => showPhotoDetails(photo)}>
      <PhotoFavButton
        photoId={photo.id}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <img src={urls.regular} alt="" className="photo-list__image" />

      <PhotoUserDetails user={user} location={location} />

    </div>
  );
};

export default PhotoListItem;
