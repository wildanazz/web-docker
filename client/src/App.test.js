import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders message", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Hi there! my personal web will be available soon/i
  );
  expect(linkElement).toBeInTheDocument();
});
