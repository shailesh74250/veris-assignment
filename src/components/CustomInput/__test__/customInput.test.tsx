import { render, screen } from "@testing-library/react";
import { CustomInput } from "../customInput";

test("renders learn react link", () => {
  render(<CustomInput />);
  const linkElement = screen.getByText(/''/i);
  expect(linkElement).toBeInTheDocument();
});
