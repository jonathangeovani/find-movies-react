import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useAppContext } from "../hooks/useAppContext";

export default function MovieDetails() {
  const { movieId } = useParams();
  const { language } = useAppContext();
  const { banner, poster, title, year, categories, duration, overview } =
    useMovieDetails(movieId!, language);

  return (
    <div className="movie-details-container">
      <img
        className="movie-banner"
        src={
          banner
            ? "https://image.tmdb.org/t/p/w500/" + banner
            : "https://placehold.co/720x480"
        }
        alt="Banner"
      />
      <img
        className="movie-poster"
        src={
          poster
            ? "https://image.tmdb.org/t/p/w500/" + poster
            : "https://placehold.co/250x400"
        }
        alt={title}
      />
      <div className="movie-content">
        <h1>{title}</h1>
        <p className="movie-facts">
          <span>{year ? year : "No information"}</span>&nbsp;&bull;
          <span>
            {categories?.map((genre) => ` ${genre.name}`)!.toString()}
          </span>
          &nbsp;&bull;&nbsp;
          <span>
            {duration
              ? `${Math.floor(duration / 60)}h ${duration % 60}m`
              : "0min"}
          </span>
        </p>
        <h2>Sinopse</h2>
        <p className="movie-description">&nbsp;&nbsp;{overview}</p>
      </div>
    </div>
  );
}
