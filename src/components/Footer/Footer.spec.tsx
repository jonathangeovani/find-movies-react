import Footer from ".";
import { render, screen } from "@testing-library/react";

vi.mock("../../hooks", () => ({
  useAppContext: () => ({
    language: "pt-BR",
  }),
}));

describe("Footer", () => {
  it("should render properly", () => {
    render(<Footer />);
    const footer = document.querySelector("footer");

    expect(footer).toBeInTheDocument();
  });

  it("should render text Jonathan Geovani", () => {
    render(<Footer />);
    const name = screen.getByText(/jonathan geovani/i);

    expect(name).toBeInTheDocument();
  });

  it("should render a year", () => {
    render(<Footer />);
    const year = screen.getByText(/2023/i);

    expect(year).toBeInTheDocument();
  });
});
