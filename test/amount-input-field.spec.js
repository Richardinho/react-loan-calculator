import React from 'react';
import { shallow, configure } from 'enzyme';
import NumberFormat from 'react-number-format';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import AmountInputField from '../src/amount-input-field.jsx';

describe('amount-input-field', () => {
  let inputField;
  describe('when the user inputs a value into the input field', () => {
    it('should call change handler', () => {
      let changeAmount = jasmine.createSpy('spy-on-handle-change');
      inputField = shallow(<AmountInputField/>);
      inputField.setProps({ changeAmount });
      inputField.find(NumberFormat).props().onValueChange({ value: 'blah' });
      expect(changeAmount).toHaveBeenCalledWith('blah');
    });
  });
});
