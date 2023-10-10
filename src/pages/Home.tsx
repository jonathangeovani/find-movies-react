import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import MoviesContainer from "../components/MoviesContainer";
import Pagination from "../components/Pagination";
import { useMovies } from "../hooks/useMovies";

interface HomeProps {
  language: string;
}

const Home = ({ language }: HomeProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, totalPages, totalResults, refetch } = useMovies(
    language,
    searchTerm,
    currentPage
  );

  useEffect(() => {
    refetch();
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <h1>Find Movies</h1>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchMovies={refetch}
      />
      <SearchResults
        language={language}
        totalResults={totalResults ? totalResults : 0}
      />
      <MoviesContainer movies={movies ? movies : []} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages ? totalPages : 0}
        totalResults={totalResults ? totalResults : 0}
        language={language}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
