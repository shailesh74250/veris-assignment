import { render, screen } from "@testing-library/react";
import { MeetingDetails } from "../meetingDetails";

test("renders learn react link", () => {
  render(<MeetingDetails />);
  const linkElement = screen.getByText(/''/i);
  expect(linkElement).toBeInTheDocument();
});
