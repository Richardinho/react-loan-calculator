import React from 'react';
import styles from './amount-range-field.scss';

export default function amountRangeField({ minAmount, maxAmount, changeAmount, amount }) {
  return (
    <div className={ styles.amountRange }>
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
