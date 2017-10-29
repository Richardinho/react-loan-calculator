import React from 'react';

export default function({ completionFee, interest, totalCost }) {
  return (
    <div>
      Completion fee { completionFee } 
      Interest { interest }
      Total cost of loan { totalCost }
    </div>
  );
}
