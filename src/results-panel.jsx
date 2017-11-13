import React from 'react';

export default function({ completionFee, interest, totalCost }) {
  return (
    <ul>
      <li data-test="completion-fee">Completion fee { completionFee }</li> 
      <li data-test="interest">Interest { interest }</li>
      <li data-test="total-cost">Total cost of loan { totalCost }</li>
    </ul>
  );
}
