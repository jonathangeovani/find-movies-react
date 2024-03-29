import { useNavigate } from "react-router-dom";
import "./style.scss";

interface MovieCardProps {
  Title: string;
  Year: string;
  imdbID: string;
  Vote: string;
  Poster: string;
}

const MovieCard = ({ Title, Year, Vote, Poster, imdbID }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="movie" onClick={() => navigate("/movie/" + imdbID)}>
      <div>
        <p>{Vote} / 10</p>
      </div>
      <div>
        <img
          src={
            Poster
              ? "https://image.tmdb.org/t/p/w500/" + Poster
              : "https://via.placeholder.com/300x400"
          }
          alt={Title}
          loading="lazy"
        />
      </div>
      <div>
        <span title="Release Year">{Year.slice(0, 4)}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
