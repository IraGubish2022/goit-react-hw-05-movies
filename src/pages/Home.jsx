import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { fetchTrending } from 'apiMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import style from '../pages/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const movies = await fetchTrending();
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCountries();
  }, []);

  return (
    <>
      <h2 className={style.title}>Trending Today</h2>
      <MoviesList movies={movies} location={location} />
    </>
  );
};
export default Home;
