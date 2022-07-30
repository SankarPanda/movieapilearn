import axios from "axios";
import React, { useEffect, useState } from "react";
import SmovieC from "../Components/SmovieC";
import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const search = async (q) => {
    let qu = q.replace(/ /g, "%20");
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${qu}`
    );
    setList(data.results);
  };
  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <div className="Mlist">
        {list.map((data, i) => {
          return <SmovieC data={data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Search;
