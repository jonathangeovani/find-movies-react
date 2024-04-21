import SearchIcon from "../../assets/search.svg";
import { useHomeContext } from "../../hooks";
import { debounce } from "../../utils/debounce";
import "./style.scss";

export default function SearchInput() {
  const { setSearchParams } = useHomeContext();

  const onchange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      (prev) => {
        prev.set("q", e.target.value);
        prev.set("p", "1");
        return prev;
      },
      { replace: true }
    );
  }, 1500);

  return (
    <div className="search">
      <input type="text" placeholder="Search for movies" onChange={onchange} />
      <img src={SearchIcon} alt="Search" />
    </div>
  );
}
