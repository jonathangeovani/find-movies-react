import { useParams } from "react-router-dom";
import { useAppContext } from "../hooks";
import { useMovieDetails, useMovieTrailer, useMovieCredits } from "../hooks";
import { MovieTrailer } from "../components";
import { useState } from "react";

export default function MovieDetails() {
  const { movieId } = useParams();
  const { language } = useAppContext();
  const { banner, poster, title, year, categories, duration, overview } =
    useMovieDetails(movieId!, language);
  const { cast } = useMovieCredits(movieId!, language);
  const { results } = useMovieTrailer(movieId!, language);
  const [displayTrailerModal, setDisplayTrailerModal] = useState(false);

  return (
    <>
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
          <div className="movie-trailer-button-container">
            {results !== undefined && results!.length > 0 ? (
              <button
                className="movie-trailer-button"
                onClick={() => setDisplayTrailerModal((prev) => !prev)}
              >
                &#9654;&nbsp;
                {language == "pt-BR" ? " Reproduzir Trailer" : " Play Trailer"}
              </button>
            ) : (
              <p>
                {language == "pt-BR"
                  ? "Nenhum Trailer disponível"
                  : "No Trailer available"}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="movie-cast">
        <h2>Cast</h2>
        <div className="cast-people">
          {cast?.map((person, index) => (
            <div className="cast-person" key={index}>
              <img
                src={
                  person.profile_path
                    ? "https://image.tmdb.org/t/p/w500/" + person.profile_path
                    : "https://placehold.co/150x225"
                }
                alt={person.name}
              />
              <p>
                {person.name}
                <br />
                <span className="cast-person-name">{person.character}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {displayTrailerModal && (
        <MovieTrailer
          trailerKey={results![0].key}
          setDisplayTrailerModal={setDisplayTrailerModal}
        />
      )}
    </>
  );
}
