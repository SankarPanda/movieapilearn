import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SmovieC from "../Components/SmovieC";
import "./discover.css";

const Discover = () => {
  const [list, setList] = useState({});
  let { page } = useParams();
  const discover = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`
    );
    setList(data);
    console.log(data);
  };
  useEffect(() => {
    discover();
  });
  return (
    <div className="discover">
      <h1>Discover</h1>
      <div className="Mlist">
        {list.results?.map((data, i) => {
          return <SmovieC data={data} key={i} />;
        })}
      </div>
      <div className="buttons">
        {Number(page) === 1 ? (
          <>
            <button
              className="btn"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Previous
            </button>
            <Link
              to={`/discover/${Number(page) + 1}`}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <button className="btn">Next</button>
            </Link>
          </>
        ) : (
          <>
            <Link
              to={`/discover/${Number(page) - 1}`}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <button className="btn">Previous</button>
            </Link>
            <Link
              to={`/discover/${Number(page) + 1}`}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <button className="btn">Next</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Discover;
