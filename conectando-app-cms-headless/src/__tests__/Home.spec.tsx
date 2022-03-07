import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  test("it should render Home component", () => {
    render(<Home />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
