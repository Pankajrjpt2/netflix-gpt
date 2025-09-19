import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryMoviesListContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-40 relative z-20 pl-13">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondryMoviesListContainer;
