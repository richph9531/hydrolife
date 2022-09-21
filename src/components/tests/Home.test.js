import React from 'react';

import { render } from '@testing-library/react';
import Home from '../Home';

test('Home renders correctly', () => {
  const view = render(<Home />);
  expect(view.baseElement).toMatchSnapshot();
});
