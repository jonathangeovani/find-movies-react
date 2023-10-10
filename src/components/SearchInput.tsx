import SearchIcon from "../assets/search.svg";
import { useHomeContext } from "../hooks/useHomeContext";

export default function SearchInput() {
  const { searchTerm, setSearchTerm, setCurrentPage, refetch } =
    useHomeContext();
  return (
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
            setCurrentPage(1);
            refetch();
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={() => {
          setCurrentPage(1);
          refetch();
        }}
      />
    </div>
  );
}
