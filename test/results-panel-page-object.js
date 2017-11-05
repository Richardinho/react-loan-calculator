export default class ResultsPanelPageObject {

  constructor (resultsPanel) {
    this.resultsPanel = resultsPanel;
  }

  assertThatCompletionFeeFieldContains(text) {
    expect(this.resultsPanel.find('[data-test="completion-fee"]').text()).toBe(text);
  }

}
