import { useEffect, useState } from "react";
import SearchIcon from "../assets/search.svg";
import { MovieCard } from "../components";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = `https://api.themoviedb.org/3/`;
let currentPage = 1;

const Home = ({ language }: any) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title: string, page = 1) => {
    const finalUrl =
      title !== ""
        ? `${API_URL}search/movie?query=${title}&language=${language}&page=${page}&api_key=${API_KEY}`
        : `${API_URL}discover/movie?with_genres=10751&language=${language}&page=${page}&api_key=${API_KEY}`;
    const response = await fetch(finalUrl);
    const data = await response.json();
    setMovies(data.results);
  };

  const searchTotalPages = async (title: string) => {
    const finalUrl =
      title !== ""
        ? `${API_URL}search/movie?query=${title}&language=${language}&page=1&api_key=${API_KEY}`
        : `${API_URL}discover/movie?with_genres=10751&language=${language}&page=1&api_key=${API_KEY}`;
    const response = await fetch(finalUrl);
    const data = await response.json();
    setTotalPages(data.total_pages);
    setTotalResults(data.total_results);
  };

  useEffect(() => {
    searchMovies(searchTerm);
    searchTotalPages(searchTerm);
  }, [language]);
  return (
    <>
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
              searchTotalPages(searchTerm);
              currentPage = 1;
            }
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            searchMovies(searchTerm);
            searchTotalPages(searchTerm);
            currentPage = 1;
          }}
        />
      </div>

      {totalResults > 0 && (
        <div className="empty">
          <h2>Results: {totalResults} found!</h2>
        </div>
      )}

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie["id"]}
              Title={movie["title"]}
              Year={movie["release_date"]}
              Vote={movie["vote_average"]}
              Poster={movie["poster_path"]}
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
        {totalResults > 0 && (
          <span>
            {currentPage}
            {" de "}
            {totalPages}
          </span>
        )}
        {totalPages > 1 && totalPages > currentPage && (
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
    </>
  );
};

export default Home;
