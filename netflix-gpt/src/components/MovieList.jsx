import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  // Early return if movies is null or undefined
  if (!movies) return null;

  return (
    <div>
      <h1 className="text-2xl font-bold p-2 text-amber-50">{title}</h1>
      <div className="flex overflow-scroll scroll-smooth custom-hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
