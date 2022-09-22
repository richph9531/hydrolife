import React from 'react';

import { render } from '@testing-library/react';
import MeetTheTeam from '../MeetTheTeam';

import teamData from '../../data/meetTheTeam.json';


test('Meet the Team renders correctly', () => {
  const view = render(<MeetTheTeam  data={teamData}/>);
  expect(view.baseElement).toMatchSnapshot();
});
