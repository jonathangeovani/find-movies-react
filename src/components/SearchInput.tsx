import SearchIcon from "../assets/search.svg";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  currentPage: number;
  setCurrentPage: (prevPage: number) => void;
  searchMovies: (title: string) => void;
  searchTotalPages: (title: string) => void;
}

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies"
        value={props.searchTerm}
        onChange={(newSearchTerm) => {
          props.setSearchTerm(newSearchTerm.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.searchMovies(props.searchTerm);
            props.searchTotalPages(props.searchTerm);
            props.setCurrentPage(1);
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={() => {
          props.searchMovies(props.searchTerm);
          props.searchTotalPages(props.searchTerm);
          props.setCurrentPage(1);
        }}
      />
    </div>
  );
}
