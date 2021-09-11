import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from 'axios';
interface Movie {
  backdrop_path: string;
  name: string;
  overview: string;
}
function Banner() {
  const [movies, setMovies] = useState<Movie | null>(null);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        'https://api.themoviedb.org/3/discover/tv?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_networks=213',
      );
      try {
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ],
        );
      } catch (error) {}
    }
    fetchData();
  }, []);
  function truncate(string: string, number: number) {
    return string?.length > number
      ? string.substr(0, number - 1) + '...'
      : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
        backgroundPosition: 'center ',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movies?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          <h2>{truncate(`${movies?.overview}`, 150)}</h2>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
