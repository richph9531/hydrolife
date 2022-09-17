import { render, screen } from '@testing-library/react';
import App from './App';

test('renders phone number link', () => {
  render(<App />);
  const element = screen.getByText(/021-705-0306/i);
  expect(element).toBeInTheDocument();
});
