import React from "react";

const PhotoUserDetails = ({ user, location }) => {
  return (
    <section className="photo-list__user-details">
      <img src={user.profile} alt="" className="photo-list__user-profile" />

      <div className="photo-list__user-info">
        {user.name}<br />
        <span className="photo-list__user-location">{location.city}, {location.country}</span>
      </div>
    </section>
  );
};

export default PhotoUserDetails;