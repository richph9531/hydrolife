import React from 'react';

import { render } from '@testing-library/react';
import PageHeader from '../PageHeader';

import contactUsData from '../../data/contactUs.json'

test('Page header renders correctly', () => {
  const view = render(<PageHeader data={contactUsData}/>);
  expect(view.baseElement).toMatchSnapshot();
});
