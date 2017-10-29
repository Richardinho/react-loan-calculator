import React from 'react';
export default function loanTerm({ setTerm, term }) {
  return (
    <div>
      <h3 >Loan term (years)</h3>
      <ol>
        <li>
          <label>
            0.5
            <input
              onChange={ () => setTerm(6) }
              type="radio"  
              checked={ term == 6 }
            />
          </label>
        </li>
        <li>
          <label>
            1
            <input
              onChange={ () => setTerm(12)}
              type="radio"  
              checked={ term == 12 }
            />
          </label>
        </li>
        <li>
          <label>
            2
            <input 
              onChange={ () => setTerm(24) }
              type="radio"  
              checked={ term == 24 }
            />
          </label>
        </li>
        <li>
          <label>
            3
            <input   
              onChange={ () => setTerm(36) }
              type="radio"  
              checked={ term ==36}
            />
          </label>
        </li>
        <li>
          <label>
            4
            <input 
              onChange={ () => setTerm(48) }
              type="radio"  
              checked={ term==48 }
            />
          </label>
        </li>
        <li>
          <label>
            5
            <input
              onChange={ () => setTerm(60) }
              type="radio"  
              checked={ term==60 }
            />
          </label>
        </li>
      </ol>
    </div>
  );
}
