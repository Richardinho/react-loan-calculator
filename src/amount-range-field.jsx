import React from 'react';

export default function amountRangeField() {

  return (
    <div>
      <input id="loan-amount-slider"  type="range" min="5000" max="1000000"/> 
      <span htmlFor="loan-amount-slider">5,000</span> 
      <span htmlFor="loan-amount-slider">1,000,000</span>
    </div>
  );
}
