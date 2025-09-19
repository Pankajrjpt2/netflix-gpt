import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import SecondryMoviesListContainer from "./SecondryMoviesListContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondryMoviesListContainer />
    </div>
  );
};

export default Browse;
