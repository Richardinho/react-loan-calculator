import React from 'react';

export default function amountRangeField({ minAmount, maxAmount, changeAmount, amount }) {
  return (
    <div>
      <input 
        id="loan-amount-slider"  
        type="range" 
        onChange={ e => { changeAmount(e.target.value);}  }
        value={ amount }
        min={ minAmount }  
        max={ maxAmount} /> 
    </div>
  );
}
