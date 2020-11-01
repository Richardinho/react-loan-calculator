import React from 'react';
configure({ adapter: new Adapter() });

import ResultsPanel from '../src/results-panel.jsx';

describe('when rendered', () => {
  let resultsPanel;
  beforeEach(() => {
    resultsPanel = shallow(<ResultsPanel completionFee="1234" interest="456" totalCost="789"/>);
  });
  it('should show completion fee', () => {
    expect(resultsPanel.find('[data-test="completion-fee"]').text()).toBe('Completion fee 1234');
  });
  it('should show interest', () => {
    expect(resultsPanel.find('[data-test="interest"]').text()).toBe('Interest 456');
  });
  it('should show total cost', () => {
    expect(resultsPanel.find('[data-test="total-cost"]').text()).toBe('Total cost of loan 789');
  });
});
