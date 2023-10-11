import React, { useState } from "react";

export default function Searchbar({ searchTerm, setSearchTerm }) {

  function searchPhotos(e) {
    console.log("pressed", e.target.value)
    setSearchTerm(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search photos..."
        onChange={searchPhotos}
        value={searchTerm}
      />
    </div>
  );
}