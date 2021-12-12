import React from 'react';
import AmountInputField from './amount-input-field.jsx';
import AmountRangeField from './amount-range-field.jsx';
import LoanTerm from './loan-term.jsx';
import ResultsPanel from './results-panel.jsx';
import styles from './calculator.css';

export default function ({ completionFee, interest, totalCost, setTerm, minAmount, maxAmount, amount, changeAmount, term }) {

  return (
    <div className={ styles.calculator }>
      <AmountInputField 
        minAmount={ minAmount } 
        maxAmount={ maxAmount} 
        amount={ amount } 
        changeAmount={ changeAmount } />
      <AmountRangeField 
        minAmount={ minAmount } 
        maxAmount={ maxAmount} 
        amount={ amount } 
        changeAmount={ changeAmount }/>
      <LoanTerm term={ term } setTerm={ setTerm } /> 
      <h3>Fixed monthly payments</h3>
      <ResultsPanel 
        completionFee={ completionFee } 
        interest={ interest } 
        totalCost={ totalCost } /> 
    </div>
  );
}
