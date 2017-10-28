import { getFooAction } from './actions.jsx';
import { connect } from 'react-redux';
import  calculatorView from './calculator-view.jsx';

const mapStateToProps = (state) => {
  return {
    foo: state.foo
  }; 
};

const mapDispatchToProps = dispatch => {
  return {
    changeFoo: val => {
      dispatch(getFooAction(val));
    }
  };
};

const Calculator  = connect(
  mapStateToProps,
  mapDispatchToProps
)(calculatorView);

export default Calculator;
