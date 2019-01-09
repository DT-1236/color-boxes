import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Box from './Box';

it('renders without crashing', () => {
  shallow(<Box />);
});

it('clicking the button changes the state', () => {
  const wrapper = shallow(<Box />);
  const oldColor = wrapper.state().color;
  wrapper.simulate('click');
  expect(wrapper.state().color).not.toEqual(oldColor);
});
