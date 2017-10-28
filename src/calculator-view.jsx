import React from 'react';
import AmountInputField from './amount-input-field.jsx';
import AmountRangeField from './amount-range-field.jsx';
import LoanTerm from './loan-term.jsx';

export default function () {
  return (
    <div>
      <AmountInputField/>
      <AmountRangeField/>
      <LoanTerm/> 
      <h3 >Fixed monthly payments</h3>
      
      <button type="button">
        Show breakdown
      </button>
      <div>
        Completion fee 
        Interest
        Total cost of loan
      </div>
    </div>
  );
}
