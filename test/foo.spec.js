import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberFormat from 'react-number-format';
configure({ adapter: new Adapter() });

import AmountInputField from '../src/amount-input-field.jsx';
import { mount, shallow } from 'enzyme';

describe('foo', () => {
  it('should..', () => {
    const wrapper = shallow(<AmountInputField/>);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h3').text()).toBe('How much do you want to borrow?');
  });
});
