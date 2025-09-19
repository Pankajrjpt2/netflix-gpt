import React from "react";
import { POSTER_CDN } from "../utils/constant";

const MovieCard = ({ key, posterPath }) => {
  return (
    <div className="w-47 p-2">
      <img src={POSTER_CDN + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
