import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Calculator from '../src/calculator.jsx';
import reducer, { initialState } from '../src/reducer.jsx';
import {  createStore } from 'redux';
import { Provider } from 'react-redux';
import ResultsPanel from '../src/results-panel.jsx';
import LoanTerm from '../src/loan-term.jsx';
import ResultsPanelPageObject from './results-panel-page-object';
import LoanTermPageObject from './loan-term-page-object';
import { getSetTermAction, getChangeAmountAction } from '../src/actions.jsx';

configure({ adapter: new Adapter() });

describe('calculator', () => {
  let calculator;
  let resultsPanelPageObject;
  let loanTermPageObject;

  describe('When.....', () => {
    
    let store,wrapper

    beforeEach(()=>{
      store = createStore(reducer, initialState);
      wrapper = mount( <Provider store={store}><Calculator /></Provider> )
      loanTermPageObject = new LoanTermPageObject(wrapper.find(LoanTerm));
      resultsPanelPageObject = new ResultsPanelPageObject(wrapper.find(ResultsPanel));
    });
    describe('when the user sets the term', () => {
      beforeEach(() => {
        store.dispatch(getSetTermAction(6));
      });
      it('should update the results panel', () => {
        resultsPanelPageObject.assertThatCompletionFeeFieldContains('Completion fee 20');
      });
    });
  });
});
