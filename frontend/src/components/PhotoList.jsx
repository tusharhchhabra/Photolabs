import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  favoritePhotos,
  toggleFavorite,
  showPhotoDetails
}) => {
  const photoListItems = () => {
    return photos.map(photo =>
      <PhotoListItem
        key={photo.id}
        photo={photo}
        isFavorite={!!favoritePhotos.find(fav => fav.id === photo.id)}
        toggleFavorite={toggleFavorite}
        showPhotoDetails={showPhotoDetails}
      />
    );
  };

  return (
    <ul className="photo-list">
      {photoListItems()}
    </ul>
  );
};

export default PhotoList;
