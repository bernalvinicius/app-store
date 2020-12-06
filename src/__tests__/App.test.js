import { render, screen } from "@testing-library/react";
import App from "../App";

test("should render screen", () => {
  render(<App />);
  const linkElement = screen.getByTestId("App_Container");
  expect(linkElement).toBeInTheDocument();
});
