import SearchInput from ".";
import { fireEvent, render, screen } from "@testing-library/react";

const handleSetSearchParams = vi.fn();
const handleRefetch = vi.fn();

vi.mock("../../hooks", () => ({
  useHomeContext: () => ({
    searchTerm: "",
    setSearchParams: handleSetSearchParams,
    refetch: handleRefetch,
  }),
}));

describe("SearchInput", () => {
  it("should render properly", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/search for movies/i);
    const img = screen.getByAltText(/search/i);

    expect(input).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("should have an empty input value", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/search for movies/i);

    expect(input.getAttribute("value")).toBe("");
  });

  it("should call setSearchParams when input value changed", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/search for movies/i);

    fireEvent.change(input, { target: { value: "testing" } });

    expect(handleSetSearchParams).toHaveBeenCalled();
  });

  it("should call refetch when hit the button or press Enter key", () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/search for movies/i);
    const img = screen.getByAltText(/search/i);

    fireEvent.click(img);
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(handleRefetch).toHaveBeenCalledTimes(2);
  });
});
