import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { movieId } = useParams();

  return (
    <div className="movie-details-container">
      <img
        className="movie-banner"
        src="https://placehold.co/720x480"
        alt="Poster Nome do filme"
      />
      <img
        className="movie-poster"
        src="https://placehold.co/250x400"
        alt="Capa Nome do filme"
      />
      <div className="movie-content">
        <h1>Título do Filme ({movieId})</h1>
        <p className="movie-facts">
          <span>Ano do filme</span> &bull; <span>Categorias, deste, filme</span>{" "}
          &bull; <span>Duração do filme</span>
        </p>
        <h2>Sinopse</h2>
        <p className="movie-description">Descrição do filme</p>
      </div>
    </div>
  );
}
