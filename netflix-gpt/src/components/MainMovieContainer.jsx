import React from "react";
import { useSelector } from "react-redux";
import BackgroundMovie from "./BackgroundMovie";
import MovieTitle from "./MovieTitle";

const MainMovieContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <MovieTitle title={original_title} overview={overview} />
      <BackgroundMovie movieId={id} />
    </div>
  );
};

export default MainMovieContainer;
