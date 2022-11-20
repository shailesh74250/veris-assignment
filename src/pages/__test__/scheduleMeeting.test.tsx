import { render, screen } from "@testing-library/react";
import { ScheduleMeeting } from "../scheduleMeeting";

test("renders learn react link", () => {
  render(<ScheduleMeeting />);
  const linkElement = screen.getByText(/''/i);
  expect(linkElement).toBeInTheDocument();
});
