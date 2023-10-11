interface MovieTrilerProps {
  trailerKey: string;
  setDisplayTrailerModal: (value: boolean) => void;
}

export default function MovieTrailer({
  trailerKey,
  setDisplayTrailerModal,
}: MovieTrilerProps) {
  return (
    <>
      <div className="movie-trailer-modal">
        <div className="btn-close-modal-container">
          <p>Trailer</p>
          <button
            className="btn-close-modal"
            onClick={() => setDisplayTrailerModal(false)}
          >
            &times;
          </button>
        </div>
        <iframe
          className="movie-trailer-video"
          src={"https://www.youtube.com/embed/" + trailerKey}
        ></iframe>
      </div>
    </>
  );
}
