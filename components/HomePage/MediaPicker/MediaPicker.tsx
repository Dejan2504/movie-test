import React from "react";
import "./MediaPicker.css";
import useLayoutApi from "../../../redux/api/useLayoutApi";

const MediaPicker = () => {
  const { mediaType, changeMedia } = useLayoutApi();

  return (
    <div className="media_picker">
      <button
        className={mediaType === "movie" ? "active" : "inactive"}
        onClick={() => changeMedia("movie")}
      >
        Movies
      </button>
      <button
        className={mediaType === "tv_series" ? "active" : "inactive"}
        onClick={() => changeMedia("tv_series")}
      >
        Tv series
      </button>
    </div>
  );
};

export default MediaPicker;
