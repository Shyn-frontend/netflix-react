import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
interface API {
  title: string;
  fetchUrl: string;
}
interface Props {
  api: API;
}
interface Movie {
  backdrop_path: string;
  name: string;
  overview: string;
  id: number;
}
function Row(api: Props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api.api.fetchUrl);
      try {
        setMovies(request.data.results);
        return request;
        // sayHi
        // eslint-disable-next-line no-empty
      } catch {}
    }
    fetchData();
  }, [api.api.fetchUrl]);
  return (
    <div className="row">
      <h2>{api.api.title}</h2>
      <div className="row__posters">
        {movies.map((movie: Movie) => (
          <img
            className="row__poster"
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
