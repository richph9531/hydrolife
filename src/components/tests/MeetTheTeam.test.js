import React from 'react';

import { render } from '@testing-library/react';
import MeetTheTeam from '../MeetTheTeam';

test('Meet the Team renders correctly', () => {
  const view = render(<MeetTheTeam />);
  expect(view.baseElement).toMatchSnapshot();
});
