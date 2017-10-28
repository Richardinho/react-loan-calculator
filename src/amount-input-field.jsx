import React from 'react';
export default function amountInputField() {

  return (
    <div>      
      <h3 >How much do you want to borrow?</h3>
      <label >
        loan amount
        <input  type="tel" maxLength="9" value="70000" size="6"/>
      </label>
      <button  type="submit">submit</button>
      <p className="label--error">The value must be between £5,000 and £1,000,000.</p>
    </div> 
  );
}
