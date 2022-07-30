import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleM.css";

//https://api.themoviedb.org/3/movie/438148?api_key=40391d780761bcee46542e09e66d0686
const SingleM = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const current = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovie(data);
    console.log(data);
  };
  useEffect(() => {
    current();
  }, []);
  let imgposter = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  return (
    <div className="SingleM">
      <div className="sm-left">
        <img
          src={movie.poster_path !== null ? imgposter : Image}
          alt={movie.original_title}
          className="movie-img"
        />
      </div>
      <div className="sm-right">
        <h1>{movie?.original_title}</h1>
        <p>{movie?.overview}</p>
        <button className="sm-btn">
          <a href={movie?.homepage} target="_blank">
            Watch Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default SingleM;
