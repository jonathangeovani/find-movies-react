import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks";
import { useMovieDetails, useMovieTrailer, useMovieCredits } from "../../hooks";
import { MovieTrailer } from "../../components";
import "./style.scss";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { language } = useAppContext();
  const {
    banner,
    poster,
    title,
    year,
    categories,
    duration,
    overview,
    detailsIsFetching,
    refetchDetails,
  } = useMovieDetails(movieId!, language);
  const { cast, creditsIsFetching } = useMovieCredits(movieId!, language);
  const { results, refetchTrailer } = useMovieTrailer(movieId!, language);

  const [displayTrailerModal, setDisplayTrailerModal] = useState(false);

  useEffect(() => {
    refetchDetails();
    refetchTrailer();
  }, [language]);

  return (
    <>
      {!detailsIsFetching ? (
        <div className="movie-details-container">
          <img
            className="movie-banner"
            src={
              banner
                ? "https://image.tmdb.org/t/p/w1280/" + banner
                : "https://placehold.co/720x480"
            }
            alt="Banner"
            loading="lazy"
          />
          <img
            className="movie-poster"
            src={
              poster
                ? "https://image.tmdb.org/t/p/w500/" + poster
                : "https://placehold.co/250x400"
            }
            alt={title}
            loading="lazy"
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
                  {language == "pt-BR"
                    ? " Reproduzir Trailer"
                    : " Play Trailer"}
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
      ) : (
        <div className="movie-details-container">
          <h2>{language == "pt-BR" ? "Carregando..." : "Loading..."}</h2>
        </div>
      )}
      {!creditsIsFetching && (
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
                  loading="lazy"
                  onClick={() => navigate("/person/" + person.id)}
                />
                <p>
                  <span
                    className="cast-person-name"
                    onClick={() => navigate("/person/" + person.id)}
                  >
                    {person.name}
                  </span>
                  <br />
                  <span className="cast-person-character">
                    {person.character}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {displayTrailerModal && (
        <MovieTrailer
          trailerKey={results![0].key}
          setDisplayTrailerModal={setDisplayTrailerModal}
        />
      )}
    </>
  );
}
