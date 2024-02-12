import MovieTrailer from ".";
import { fireEvent, render, screen } from "@testing-library/react";

const mockDisplayModalFunction = vi.fn();

const renderMovieTrailer = () => {
  render(
    <MovieTrailer
      trailerKey="youtube_key"
      setDisplayTrailerModal={mockDisplayModalFunction}
    />
  );
};

describe("MovieTrailer", () => {
  it("should render properly", () => {
    renderMovieTrailer();

    const title = screen.getByText("Trailer");
    const button = screen.getByRole("button");

    expect(title).toBeInTheDocument();
    expect(button).toContainHTML("&times;");
  });

  it("should render the youtube iframe video properly", () => {
    renderMovieTrailer();

    const iframe = screen.getByTitle(/movie trailer/i);

    expect(iframe).toBeVisible();
    expect(iframe.getAttribute("src")).toBe(
      "https://www.youtube.com/embed/youtube_key"
    );
    expect(iframe.getAttribute("allowfullscreen")).toBeDefined();
  });

  it("should close when hit the close button", () => {
    renderMovieTrailer();

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockDisplayModalFunction).toHaveBeenCalledWith(false);
  });
});
