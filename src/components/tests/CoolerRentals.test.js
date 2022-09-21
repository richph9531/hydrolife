import React from 'react';

import { render } from '@testing-library/react';
import CoolerRentals from '../CoolerRentals';

test('Cooler Rentals renders correctly', () => {
  const view = render(<CoolerRentals />);
  expect(view.baseElement).toMatchSnapshot();
});
