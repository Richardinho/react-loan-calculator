import React from 'react';
import styles from './loan-term.css';

export default function loanTerm({ setTerm, term }) {
  return (
    <div>
      <h3 >Loan term (years)</h3>
      <ol>
        <li className={ styles.radioButtons }>
          <label htmlFor="6" className={ styles.label }>0.50</label>
          <input
            id="6"
            data-test="term-6"
            className={ styles.input }
            onChange={ () => setTerm(6) }
            type="radio"
            checked={ term == 6 }
          />
          <label htmlFor="6" className={ styles.radio + ' ' + (term == 6 && styles.checked) }></label>
        </li>
        <li className={ styles.radioButtons }>
          <label htmlFor="12" className={ styles.label }>1</label>
          <input
            id="12"
            className={ styles.input }
            onChange={ () => setTerm(12)}
            type="radio"
            checked={ term == 12 }
          />
          <label htmlFor="12" className={ styles.radio + ' ' + (term == 12 && styles.checked) }></label>
        </li>
        <li className={ styles.radioButtons }>
          <label htmlFor="24" className={ styles.label }>2</label>
          <input 
            id="24"
            className={ styles.input }
            onChange={ () => setTerm(24) }
            type="radio"  
            checked={ term == 24 }
          />
          <label htmlFor="24" className={ styles.radio + ' ' + (term == 24 && styles.checked) }></label>
        </li>
        <li className={ styles.radioButtons }>
          <label htmlFor="36" className={ styles.label }>3</label>
          <input
            id="36"
            className={ styles.input }
            onChange={ () => setTerm(36) }
            type="radio"
            checked={ term ==36}
          />
          <label htmlFor="36" className={ styles.radio + ' ' + (term == 36 && styles.checked) }></label>
        </li>
        <li className={ styles.radioButtons }>
          <label htmlFor="48" className={ styles.label }>4</label>
          <input
            id="48"
            className={ styles.input }
            onChange={ () => setTerm(48) }
            type="radio"  
            checked={ term==48 }
          />
          <label htmlFor="48" className={ styles.radio + ' ' + (term == 48 && styles.checked) }></label>
        </li>
        <li className={ styles.radioButtons }>
          <label htmlFor="60" className={ styles.label }>5</label>
          <input
            id="60"
            className={ styles.input }
            onChange={ () => setTerm(60) }
            type="radio"  
            checked={ term==60 }
          />
          <label htmlFor="60" className={ styles.radio + ' ' + (term == 60 && styles.checked) }></label>
        </li>
      </ol>
    </div>
  );
}
