import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (
  { topics,
    setPhotosByTopics,
    photos,
    showPhotoDetails,
    favoritePhotos,
    toggleFavorite
  }) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        setPhotosByTopics={setPhotosByTopics}
        isFavPhotoExist={favoritePhotos.length > 0}
      />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        showPhotoDetails={showPhotoDetails}
      />
    </div>
  );
};

export default HomeRoute;
