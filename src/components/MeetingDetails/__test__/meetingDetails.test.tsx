import { render, screen } from '@testing-library/react';
import { MeetingDetails } from '../meetingDetails';

// eslint-disable-next-line no-undef
describe('Testing MeetingDetails component', () => {
  // eslint-disable-next-line no-undef
  test('renders MeetingDetails component', () => {
    render(<MeetingDetails />);
    const meetingWith = screen.getByText(/Gurav Garg/i);
    const meetingTitle = screen.getByText(/15 Minute Meeting/i);
    const meetingTime = screen.getByText(/9:30am-9:45am, Friday, September 16, 2022/i);
    expect(meetingWith).toBeInTheDocument();
    expect(meetingTitle).toBeInTheDocument();
    expect(meetingTime).toBeInTheDocument();
  });
});
