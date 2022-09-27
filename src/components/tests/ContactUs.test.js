import React from 'react';

import { render } from '@testing-library/react';
import ContactUs from '../ContactUs';

test.skip('Contact Us renders correctly', () => {
  const view = render(<ContactUs />);
  expect(view.baseElement).toMatchSnapshot();
});
