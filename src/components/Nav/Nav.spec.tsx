import Nav from ".";
import { fireEvent, render, screen } from "@testing-library/react";

const handleSetLanguage = vi.fn();
const handleLinkClick = vi.fn();

vi.mock("../../hooks", () => ({
  useAppContext: () => ({
    language: "pt-br",
    setLanguage: handleSetLanguage,
  }),
}));

vi.mock("react-router-dom", () => ({
  Link: () => (
    <>
      <a href="#" onClick={handleLinkClick} />
    </>
  ),
}));

describe("Nav", () => {
  it("should render properly", () => {
    render(<Nav />);
    const nav = screen.getByRole("navigation");
    const enButton = screen.getByText(/en/i, { selector: ".languages span" });
    const brButton = screen.getByText(/br/i, { selector: ".languages span" });
    const links = screen.getAllByRole("link");

    expect(nav).toBeInTheDocument();
    expect(enButton).toBeInTheDocument();
    expect(brButton).toBeInTheDocument();
    expect(links).toHaveLength(2);
  });

  it("should set language when hit language button", () => {
    render(<Nav />);
    const enButton = screen.getByText(/en/i, { selector: ".languages span" });
    const brButton = screen.getByText(/br/i, { selector: ".languages span" });

    fireEvent.click(enButton);
    fireEvent.click(brButton);

    expect(handleSetLanguage).toHaveBeenCalledTimes(2);
  });

  it("should navigate to some page when hit nav links", () => {
    render(<Nav />);
    const links = screen.getAllByRole("link");

    fireEvent.click(links[0]);
    fireEvent.click(links[1]);

    expect(handleLinkClick).toHaveBeenCalledTimes(2);
  });
});
