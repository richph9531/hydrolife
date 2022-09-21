import React from 'react';

import { render } from '@testing-library/react';
import PageHeader from '../PageHeader';

test('Page header renders correctly', () => {
  const view = render(<PageHeader />);
  expect(view.baseElement).toMatchSnapshot();
});
