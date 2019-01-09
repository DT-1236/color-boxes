import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import SmartBoxes from './SmartBoxes';

it('renders without crashing', () => {
  shallow(<SmartBoxes />);
});

it('renders kids without crashing', () => {
  mount(<SmartBoxes />);
});
