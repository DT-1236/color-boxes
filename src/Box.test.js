import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Box, { getRandomColor } from './Box';

it('renders without crashing', () => {
  shallow(<Box />);
});

it('clicking the button changes the state', () => {
  const wrapper = shallow(<Box />);
});
