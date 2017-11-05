export default class LoanTermPageObject {

  constructor (loanTerm) {
    this.loanTerm = loanTerm;
  }

  selectTerm(term) {
  
    this.loanTerm.find(`[data-test="term-${term}"]`).simulate('click');
  }
}
