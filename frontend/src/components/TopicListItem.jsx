import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, setPhotosByTopics }) => {
  return (
    <div className="topic-list__item" onClick={() => setPhotosByTopics(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
