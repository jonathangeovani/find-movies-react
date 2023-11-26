import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../hooks";
import { usePersonDetails, usePersonMovies } from "../hooks";

enum EnGenderCodes {
  "Not Specified",
  "Female",
  "Male",
  "Non-binary",
}

enum BrGenderCodes {
  "Não especificado",
  "Feminino",
  "Masculino",
  "Não Binário",
}

export default function PersonDetails() {
  const { personId } = useParams();
  const { language } = useAppContext();
  const {
    name,
    gender,
    profile,
    birth_place,
    birthday,
    deathday,
    department,
    biography,
    detailsIsFetching,
    refetchDetails,
  } = usePersonDetails(personId!, language);

  const { cast, moviesIsFetching, refetchMovies } = usePersonMovies(
    personId!,
    language
  );
  const navigate = useNavigate();

  useEffect(() => {
    refetchDetails();
    refetchMovies();
  }, [language]);

  return (
    <>
      {!detailsIsFetching ? (
        <div className="movie-details-container">
          <img
            className="movie-poster"
            src={
              profile
                ? "https://image.tmdb.org/t/p/w500/" + profile
                : "https://placehold.co/250x400"
            }
            alt={name}
          />
          <div className="movie-content">
            <h1>{name}</h1>
            <p className="movie-facts">
              <span>
                {language == "pt-BR"
                  ? BrGenderCodes[gender!]
                  : EnGenderCodes[gender!]}
              </span>
              &nbsp;&bull;&nbsp;
              <span>{department}</span>
              <br />
              {birthday && (
                <span>
                  {deathday ? birthday + " - " + deathday : birthday}
                  &nbsp;&bull;&nbsp;
                </span>
              )}
              <span>
                {birth_place
                  ? birth_place
                  : language == "pt-BR"
                  ? `Sem mais informações.`
                  : `No more information`}
              </span>
            </p>
            <h2>{language == "pt-BR" ? "Biografia" : "Biography"}</h2>
            <p className="movie-description">
              &nbsp;&nbsp;
              {biography
                ? biography
                : language == "pt-BR"
                ? `Ainda não temos uma Biografia para ${name}.`
                : `We don't have a biography for ${name} yet.`}
            </p>
          </div>
        </div>
      ) : (
        <div className="movie-details-container">
          <h2>{language == "pt-BR" ? "Carregando..." : "Loading..."}</h2>
        </div>
      )}
      {!moviesIsFetching && (
        <div className="movie-cast">
          <h2>{language == "pt-BR" ? "Conhecido por" : "Known for"}</h2>
          <div className="cast-people">
            {cast?.map((movie, index) => {
              if (index < 20)
                return (
                  <div className="cast-person" key={movie.id}>
                    <img
                      src={
                        movie.poster_path
                          ? "https://image.tmdb.org/t/p/w500/" +
                            movie.poster_path
                          : "https://placehold.co/150x225"
                      }
                      alt={movie.title}
                      onClick={() => navigate("/movie/" + movie.id)}
                    />
                    <p>
                      <span
                        className="cast-person-name"
                        onClick={() => navigate("/movie/" + movie.id)}
                      >
                        {movie.title}
                      </span>
                      <br />
                      <span className="cast-person-character">
                        {movie.release_date}
                      </span>
                    </p>
                  </div>
                );
            })}
          </div>
        </div>
      )}
    </>
  );
}
