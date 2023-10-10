import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, isFavorite, toggleFavorite }) {
  const toggle = (e) => {
    e.stopPropagation();
    toggleFavorite(photoId);
  };

  return (
    <div
      className="photo-list__fav-icon"
      onClick={toggle}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;