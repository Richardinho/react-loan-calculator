import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import LoanTerm from '../src/loan-term.jsx';

describe('when user selects a term', () => {
  let loanTerm;
  let spyOnSetTerm;
  beforeEach(() => {
    loanTerm = shallow(<LoanTerm/>);
    spyOnSetTerm = jasmine.createSpy('spy-on-set-term');
    loanTerm.setProps({ setTerm: spyOnSetTerm });
    loanTerm.find('input[type="radio"]').findWhere((input) => {
      return input.props().id === '12';
    }).simulate('change')
  });
  it('should call setTerm() with term', () => {
    expect(spyOnSetTerm).toHaveBeenCalledWith(12);
  });
});

