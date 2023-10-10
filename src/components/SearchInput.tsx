import SearchIcon from "../assets/search.svg";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  currentPage: number;
  setCurrentPage: (prevPage: number) => void;
  searchMovies: () => void;
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
            props.setCurrentPage(1);
            props.searchMovies();
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={() => {
          props.setCurrentPage(1);
          props.searchMovies();
        }}
      />
    </div>
  );
}
