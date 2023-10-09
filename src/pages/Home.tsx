import { useEffect, useState } from "react";
import { MovieCard } from "../components";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = `https://api.themoviedb.org/3/`;

const Home = ({ language }: any) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  function getNextPage(page: number) {
    searchMovies(searchTerm, page);
    window.scrollTo(0, 0);
    setCurrentPage(page);
  }

  useEffect(() => {
    searchMovies(searchTerm);
    searchTotalPages(searchTerm);
  }, [language]);
  return (
    <>
      <h1>Find Movies</h1>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchMovies={searchMovies}
        searchTotalPages={searchTotalPages}
      />

      <SearchResults language={language} totalResults={totalResults} />

      <div className="container">
        {movies?.map((movie) => (
          <MovieCard
            key={movie["id"]}
            Title={movie["title"]}
            Year={movie["release_date"]}
            Vote={movie["vote_average"]}
            Poster={movie["poster_path"]}
          />
        ))}
      </div>

      <div className="page-arrows">
        {currentPage > 1 && (
          <span
            className="arrow"
            onClick={() => {
              getNextPage(currentPage - 1);
            }}
          >
            &lt;
          </span>
        )}
        {totalResults > 0 && (
          <span className="page-index">
            {currentPage}
            {language === "pt-BR" ? " de " : " of "}
            {totalPages}
          </span>
        )}
        {totalPages > 1 && totalPages > currentPage && (
          <span
            className="arrow"
            onClick={() => {
              getNextPage(currentPage + 1);
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
