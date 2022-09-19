import { render, screen } from '@testing-library/react';
import App from './App';

test('renders phone number link', () => {
  render(<App />);
  const element = screen.getByText(/087 820 3953/i);
  expect(element).toBeInTheDocument();
});
