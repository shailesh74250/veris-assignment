import { render, screen } from '@testing-library/react';
import { UserDetails } from '../userDetails';

test('renders learn react link', () => {
  render(<UserDetails />);
  const linkElement = screen.getByText(/''/i);
  expect(linkElement).toBeInTheDocument();
});
