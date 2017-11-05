import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Calculator from '../src/calculator.jsx';
import reducer, { initialState } from '../src/reducer.jsx';
import {  createStore } from 'redux';
import { Provider } from 'react-redux';
import ResultsPanel from '../src/results-panel.jsx';
import ResultsPanelPageObject from './results-panel-page-object';

configure({ adapter: new Adapter() });

describe('calculator', () => {
  let calculator;
  let resultsPanelPageObject;

  describe('When.....', () => {
    
    let store,wrapper

    beforeEach(()=>{
      store = createStore(reducer, initialState);
      wrapper = mount( <Provider store={store}><Calculator /></Provider> )
      resultsPanelPageObject = new ResultsPanelPageObject(wrapper.find(ResultsPanel));
    })
    
    it('should....', () => {
      resultsPanelPageObject.assertThatCompletionFeeFieldContains('Completion fee 39');
    });
  });

});
