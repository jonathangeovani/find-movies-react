import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../hooks";
import { usePersonDetails, usePersonMovies } from "../../hooks";
import "./style.scss";

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
        <div className="person-details-container">
          <img
            className="person-poster"
            src={
              profile
                ? "https://image.tmdb.org/t/p/w500/" + profile
                : "https://placehold.co/250x400"
            }
            alt={name}
            loading="lazy"
          />
          <div className="person-content">
            <h1>{name}</h1>
            <p className="person-facts">
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
            <p className="person-description">
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
        <div className="person-details-container">
          <h2>{language == "pt-BR" ? "Carregando..." : "Loading..."}</h2>
        </div>
      )}
      {!moviesIsFetching && (
        <div className="person-cast">
          <h2>{language == "pt-BR" ? "Conhecido por" : "Known for"}</h2>
          <div className="cast-movies">
            {cast?.map((movie, index) => {
              if (index < 20)
                return (
                  <div className="cast-movie" key={movie.id}>
                    <img
                      src={
                        movie.poster_path
                          ? "https://image.tmdb.org/t/p/w500/" +
                            movie.poster_path
                          : "https://placehold.co/150x225"
                      }
                      alt={movie.title}
                      loading="lazy"
                      onClick={() => navigate("/movie/" + movie.id)}
                    />
                    <p>
                      <span
                        className="cast-movie-title"
                        onClick={() => navigate("/movie/" + movie.id)}
                      >
                        {movie.title}
                      </span>
                      <br />
                      <span className="cast-movie-release">
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
