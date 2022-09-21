import { render, screen } from '@testing-library/react';
import App from './App';

test('Page DOM is correct', () => {
  const view = render(<App />);
  expect(view.baseElement).toMatchSnapshot();
});
