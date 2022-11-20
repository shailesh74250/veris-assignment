import { render, screen, fireEvent } from '@testing-library/react';
import { UserDetails } from '../userDetails';

// eslint-disable-next-line no-undef
describe('Testing UserDetails component', () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => {
    window.matchMedia =
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {}
        };
      };
  });
  // eslint-disable-next-line no-undef
  test('renders UserDetails component', () => {
    render(<UserDetails />);
    const enterDetails = screen.getByText(/Enter Details/i);
    expect(enterDetails).toBeInTheDocument();
  });
  // eslint-disable-next-line no-undef
  test('Name field exists in the registration form', () => {
    render(<UserDetails />);
    const firstNameElement = screen.getByPlaceholderText('name');
    expect(firstNameElement).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('Name field should not be empty', async () => {
    render(<UserDetails />);
    const nameElement = screen.getByPlaceholderText<HTMLInputElement>('name');
    fireEvent.change(nameElement, { target: { value: 'shailesh' } });
    expect(nameElement.value).not.toBe('');
    expect(nameElement.value).toBe('shailesh');
  });
  // eslint-disable-next-line no-undef
  test('Email field should not be empty', async () => {
    render(<UserDetails />);
    const emailElement = await screen.getByPlaceholderText<HTMLInputElement>('email');
    fireEvent.change(emailElement, { target: { value: 'shaileshmourya1995@gmail.com' } });
    expect(emailElement.value).not.toBe('');
    expect(emailElement.value).toBe('shaileshmourya1995@gmail.com');
  });
});
