import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, setPhotosByTopics, isFavPhotoExist }) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar-content">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList
          topics={topics}
          setPhotosByTopics={setPhotosByTopics}
        />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;