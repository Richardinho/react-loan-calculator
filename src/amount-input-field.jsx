import React from 'react';
import NumberFormat from 'react-number-format';
import styles from './amount-input.css';

export default class AmountInputField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    if (val < this.props.minAmount) {
      this.setState({
        message: 'amount must be greater than the minimum',
      });
    } else if(val > this.props.maxAmount) {
      this.setState({
        message: 'amount must be less than the maximum',
      });
    } else {
      this.setState({
        message: null
      });
    }

    this.props.changeAmount(val);
  }

  render() {


    return (
      <div className={ styles.amountInput }>
        <h3 className={ styles.header } >How much do you want to borrow?</h3>
        <NumberFormat 
          className={ styles.inputField }
          onValueChange={ (data) => {
            this.handleChange(data.value);
          }}
          type='tel'
          value={this.props.amount}
          thousandSeparator={true}
          prefix={'$'} />
        { this.state.message  &&
            <p className={ styles.labelError }>
              { this.state.message }
            </p>
        }
      </div>
    );
  }
}
