import React from "react";
import "./HomePage.css";
import MediaPicker from "./MediaPicker/MediaPicker";
import SearchMedia from "./SearchMedia/SearchMedia";
import MediaList from "./MediaList/MediaList";

const HomePage = () => {
  return (
    <div className="home_page">
      <MediaPicker />
      <SearchMedia />
      <MediaList />
    </div>
  );
};

export default HomePage;
