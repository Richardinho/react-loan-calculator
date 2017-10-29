import { getSetTermAction, getChangeAmountAction } from './actions.jsx';
import calculateAmortisedValue from './calculations.js';
import { connect } from 'react-redux';
import  calculatorView from './calculator-view.jsx';

const mapStateToProps = (state) => {

  let data = calculateAmortisedValue(state.amount, state.term);  

  return {
    amount: state.amount || 0,
    minAmount: 348,
    maxAmount: 45000,
    term: state.term,
    completionFee: data.completionFee,
    interest: data.interestFee,
    totalCost: data.totalCost,
  }; 
};

const mapDispatchToProps = dispatch => {
  return {
    changeAmount: val => {
      dispatch(getChangeAmountAction(val));
    },
    setTerm: val => {
      dispatch(getSetTermAction(val));
    }
  };
};

const Calculator  = connect(
  mapStateToProps,
  mapDispatchToProps
)(calculatorView);

export default Calculator;
