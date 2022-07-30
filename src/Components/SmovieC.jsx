import React from "react";
import "./Smovie.css";
import { Link } from "react-router-dom";
import Image from "../assets/notavl.jpg";

const SmovieC = ({ data }) => {
  let imgposter = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  return (
    <Link to={`/movie/${data.id}`}>
      <div className="SMC">
        <img
          src={data.poster_path !== null ? imgposter : Image}
          alt={data.original_title.slice(0, 10)}
          className="movie-img"
        />
        <h3>{data.original_title.slice(0, 15)}...</h3>
      </div>
    </Link>
  );
};

export default SmovieC;
