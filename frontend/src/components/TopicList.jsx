import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, toggleFavorite, setPhotosByTopics }) => {
  const topicListItems = topics.map(topic => {
    return (
      <TopicListItem
        key={topic.id}
        topic={topic}
        toggleFavorite={toggleFavorite}
        setPhotosByTopics={setPhotosByTopics}
      />);
  });

  return (
    <div className="top-nav-bar__topic-list">
      {topicListItems}
    </div>
  );
};

export default TopicList;
