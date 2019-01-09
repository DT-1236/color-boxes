import React from 'react';
import { shallow, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Boxes from './Boxes';

it('renders without crashing', () => {
  shallow(<Boxes />);
});

it('renders kids without crashing', () => {
  mount(<Boxes />);
});
