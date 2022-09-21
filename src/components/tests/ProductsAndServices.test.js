import React from 'react';

import { render } from '@testing-library/react';
import ProductsAndServices from '../ProductsAndServices';

test('Products and Services renders correctly', () => {
  const view = render(<ProductsAndServices />);
  expect(view.baseElement).toMatchSnapshot();
});
