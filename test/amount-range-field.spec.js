import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import AmountRangeField from '../src/amount-range-field.jsx';

describe('amount-range-field', () => {
  let rangeField;
  let spyOnChangeAmount;

  describe('when the user inputs a value into the range field', () => {
    beforeEach(() => {
      spyOnChangeAmount = jasmine.createSpy('spy-on-change-amount');
      rangeField = shallow(<AmountRangeField/>);
      rangeField.setProps({ changeAmount: spyOnChangeAmount });
      rangeField.find('input').simulate('change', { target: { value: 34 }});
    });
    it('should call change handler with input value', () => {
      expect(spyOnChangeAmount).toHaveBeenCalledWith(34);
    });
  });
});
