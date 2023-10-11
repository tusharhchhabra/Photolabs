import React from 'react';

import '../styles/TopNavigationBar.scss';
import '../styles/Searchbar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import Searchbar from './Searchbar';

const TopNavigation = ({
  topics,
  setPhotosByTopics,
  isFavPhotoExist,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <div className="top-nav-bar">
      <div className="top-nav-bar-content">
        <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList
          topics={topics}
          setPhotosByTopics={setPhotosByTopics}
        />
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;