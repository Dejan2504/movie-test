import { useState } from "react";
import "./SearchMedia.css";
import useLayoutApi from "../../../redux/api/useLayoutApi";

const SearchMedia = () => {
  const { mediaType, searchInput, changeSearchInput } = useLayoutApi();
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <div className={`search_media ${isGlowing ? "glow" : "not_glowing"}`}>
      <img src="/assets/search.svg" alt="search_icon" />
      <input
        defaultValue={searchInput}
        type="text"
        placeholder={`Search ${
          mediaType === "movie" ? "Movie" : "TV Series"
        } ...`}
        onClick={() => {
          setIsGlowing(true);
        }}
        onBlur={() => {
          setIsGlowing(false);
        }}
        onChange={(e) => {
          changeSearchInput(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchMedia;
