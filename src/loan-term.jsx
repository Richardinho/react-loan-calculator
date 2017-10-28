import React from 'react';
export default function loanTerm() {
  return (
    <div>
      <h3 >Loan term (years)</h3>
      <ol>
        <li>
          <input id="loan_term_1"  type="radio" name="loan_term" value="0.5"/>
          <label  htmlFor="loan_term_1">½</label>
        </li>
        <li>
          <input id="loan_term_2"  type="radio" name="loan_term" value="1"/>
          <label  htmlFor="loan_term_2">1</label>
        </li>
        <li>
          <input id="loan_term_3"  type="radio" name="loan_term" value="2"/>
          <label  htmlFor="loan_term_3">2</label>
        </li>
        <li>
          <input id="loan_term_4"  type="radio" name="loan_term" value="3" checked="true"/>
          <label  htmlFor="loan_term_4">3</label>
        </li>
        <li>
          <input id="loan_term_5"  type="radio" name="loan_term" value="4"/>
          <label  htmlFor="loan_term_5">4</label>
        </li>
        <li>
          <input id="loan_term_6"  type="radio" name="loan_term" value="5"/>
          <label  htmlFor="loan_term_6">5</label>
        </li>
      </ol>
    </div>
  );
}
