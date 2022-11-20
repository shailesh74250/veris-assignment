import { render, screen } from "@testing-library/react";
import { CustomButton } from "../customButton";

test("renders learn react link", () => {
  render(<CustomButton />);
  const linkElement = screen.getByText(/''/i);
  expect(linkElement).toBeInTheDocument();
});
