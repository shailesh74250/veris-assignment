import React, { render, screen } from '@testing-library/react';
import { CustomButton } from '../customButton';

// eslint-disable-next-line no-undef
describe('Unit test custom button', () => {
  // eslint-disable-next-line no-undef
  test('renders learn react link', () => {
    render(<CustomButton>Schedule Event</CustomButton>);
    const linkElement = screen.getByText(/''/i);
    expect(linkElement).toBeInTheDocument();
  }, 30000);
});
