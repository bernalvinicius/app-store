import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

test("should render Header Component", () => {
  render(<Header />);
  const linkElement = screen.getByTestId("Header_Container");
  expect(linkElement).toBeInTheDocument();
});
