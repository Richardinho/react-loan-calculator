import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Calculator from '../src/calculator.jsx';
import reducer, { initialState } from '../src/reducer.jsx';
import {  createStore } from 'redux';
import { Provider } from 'react-redux';
import ResultsPanel from '../src/results-panel.jsx';

configure({ adapter: new Adapter() });

describe('calculator', () => {
  let calculator;

  describe('When.....', () => {
    
    let store,wrapper

    beforeEach(()=>{
      store = createStore(reducer, initialState);
      wrapper = mount( <Provider store={store}><Calculator /></Provider> )
    })
    
    it('should....', () => {
      let resultsPanel = wrapper.find(ResultsPanel);
      expect(resultsPanel.length).toBe(1);
      expect(resultsPanel.find('[data-test="completion-fee"]').text()).toBe('Completion fee 39');
    });
  });


});
