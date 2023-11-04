import SearchIcon from "../assets/search.svg";
import { useHomeContext } from "../hooks";

export default function SearchInput() {
  const { searchTerm, setSearchParams, refetch } = useHomeContext();
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies"
        value={searchTerm || ""}
        onChange={(newSearchTerm) => {
          setSearchParams(
            (prev) => {
              prev.set("q", newSearchTerm.target.value);
              return prev;
            },
            { replace: true }
          );
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearchParams(
              (prev) => {
                prev.set("p", "1");
                return prev;
              },
              { replace: true }
            );
            refetch();
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={() => {
          setSearchParams(
            (prev) => {
              prev.set("p", "1");
              return prev;
            },
            { replace: true }
          );
          refetch();
        }}
      />
    </div>
  );
}
