import React from 'react';

export default function({ completionFee, interest, totalCost }) {
  return (
    <ul>
      <li>Completion fee { completionFee }</li> 
      <li>Interest { interest }</li>
      <li>Total cost of loan { totalCost }</li>
    </ul>
  );
}
