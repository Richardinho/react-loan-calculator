import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberFormat from 'react-number-format';
import { mount } from 'enzyme';
import Calculator from '../src/calculator.jsx';
import reducer, { initialState } from '../src/reducer.jsx';
import {  createStore } from 'redux';
import { Provider } from 'react-redux';
import ResultsPanel from '../src/results-panel.jsx';
import LoanTerm from '../src/loan-term.jsx';
import AmountInputField from '../src/amount-input-field.jsx';
import AmountRangeField from '../src/amount-range-field.jsx';
import { getSetTermAction, getChangeAmountAction } from '../src/actions.jsx';

configure({ adapter: new Adapter() });

describe('calculator', () => {
  let calculator;

  describe('When.....', () => {
    
    let store,wrapper

    beforeEach(()=>{
      store = createStore(reducer, initialState);
      wrapper = mount( <Provider store={store}><Calculator /></Provider> )
    });

    describe('when the user inputs a number into the amount field', () => {
      beforeEach(() => {
        wrapper.find(NumberFormat).props().onValueChange({
          value: 4314
        });
      });
      it('should update the results panel', () => {
        expect(wrapper.find(ResultsPanel).props().completionFee).toBe(39);
      });
    });
  });
});
