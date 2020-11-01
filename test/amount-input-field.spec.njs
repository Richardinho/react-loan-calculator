import React from 'react';
import { shallow, configure } from 'enzyme';
import NumberFormat from 'react-number-format';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import AmountInputField from '../src/amount-input-field.jsx';

describe('amount-input-field', () => {
  let inputField;
  let changeAmountSpy;

  describe('when the user inputs a value into the input field', () => {
    beforeEach(() => {
      inputField = shallow(<AmountInputField/>);
      changeAmountSpy = jasmine.createSpy('change-amount-spy');
      inputField.setProps({
        minAmount: 45,
        maxAmount: 200,
        changeAmount: changeAmountSpy, 
      });
    });
    describe('when user inputs a valid value', () => {
      beforeEach(() => {
        inputField.find(NumberFormat).props().onValueChange({ value: 100 });
      });
      it('should NOT display error message', () => {
        expect(inputField.state().message).toBe(null);
        expect(changeAmountSpy).toHaveBeenCalledWith(100);
      });
    });
    describe('when user inputs an invalid value', () => {
      describe('and value is less than minimum allowed', () => {
        beforeEach(() => {
          inputField.find(NumberFormat).props().onValueChange({ value: 25 });
        });
        it ('should display error message', () => {
          expect(inputField.state().message).toBe('amount must be greater than the minimum');
          expect(changeAmountSpy).toHaveBeenCalledWith(25);
        });
      });
      describe('and value is more than maximum allowed', () => {
        beforeEach(() => {
          inputField.find(NumberFormat).props().onValueChange({ value: 300 });
        });
        it('should display error message', () => {
          expect(inputField.state().message).toBe('amount must be less than the maximum');
          expect(changeAmountSpy).toHaveBeenCalledWith(300);
        });
      });
    });
  });
});
