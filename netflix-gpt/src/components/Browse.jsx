import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondryMoviesListContainer from "./SecondryMoviesListContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondryMoviesListContainer />
    </div>
  );
};

export default Browse;
