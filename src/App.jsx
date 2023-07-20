/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  async function search(q) {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    } else {
      return;
    }
  }

  function PopularMovieList() {
    const imgUrl = import.meta.env.VITE_BASEIMGURL;

    return popularMovies.map((movie, index) => {
      return (
        <div className="movie-wrapper" key={index}>
          <img src={`${imgUrl}/${movie.poster_path}`} alt="gambar" className="movie-image" />
          <div className="description">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-date">{movie.release_date}</p>
            <span className="movie-rate">{movie.vote_average}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="page-container">
      <h1 className="page-title">LK21 MOVIE</h1>
      <input type="text" placeholder="Cari film kesukaanmu..." className="search-movie" onChange={({ target }) => search(target.value)} />
      <div className="movie-container">
        <PopularMovieList />
      </div>
    </div>
  );
}

export default App;
