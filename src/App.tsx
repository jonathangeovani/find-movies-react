import { useEffect, useState } from "react";
import SearchIcon from "./assets/search.svg";
import "./App.css";
import { MovieCard } from "./components";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
let currentPage = 1;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const searchMovies = async (title: string, page = 1) => {
    const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const searchTotalResults = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setTotalResults(data.totalResults);
  };

  useEffect(() => {
    searchMovies(searchTerm);
    searchTotalResults(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>Find Movies</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(newSearchTerm) => {
            setSearchTerm(newSearchTerm.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchTerm);
              searchTotalResults(searchTerm);
              currentPage = 1;
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovies(searchTerm);
            searchTotalResults(searchTerm);
            currentPage = 1;
          }}
        />
      </div>

      {totalResults && (
        <div className="empty">
          <h2>Results: {totalResults} found!</h2>
        </div>
      )}

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie["imdbID"]}
              Title={movie["Title"]}
              Year={movie["Year"]}
              Type={movie["Type"]}
              Poster={movie["Poster"]}
            />
          ))
        ) : (
          <div className="empty">
            <h2>No movies found!</h2>
          </div>
        )}
      </div>

      <div className="page-arrows">
        {currentPage > 1 && (
          <span
            onClick={() => {
              currentPage--;
              searchMovies(searchTerm, currentPage);
              window.scrollTo(0, 0);
            }}
          >
            &lt;
          </span>
        )}
        {totalResults && (
          <span>
            {currentPage} de{" "}
            {totalResults % 10 !== 0
              ? Math.floor(totalResults / 10) + 1
              : totalResults / 10}
          </span>
        )}
        {totalResults > 10 && totalResults / 10 > currentPage && (
          <span
            onClick={() => {
              currentPage++;
              searchMovies(searchTerm, currentPage);
              window.scrollTo(0, 0);
            }}
          >
            &gt;
          </span>
        )}
      </div>
    </div>
  );
};

export default App;
