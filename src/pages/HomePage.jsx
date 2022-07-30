import axios from "axios";
import React, { useEffect, useState } from "react";
import SmovieC from "../Components/SmovieC";
import "./home.css";

const HomePage = () => {
  const [list, setList] = useState([]);
  const trending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setList(data.results);
  };

  useEffect(() => {
    trending();
  }, []);
  return (
    <div className="home">
      <h1>Top Trending this week</h1>
      <div className="Mlist">
        {list.map((data, i) => {
          return <SmovieC data={data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
