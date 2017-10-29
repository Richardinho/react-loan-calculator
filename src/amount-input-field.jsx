import React from 'react';
import NumberFormat from 'react-number-format';

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
      <div>      
        <h3 >How much do you want to borrow?</h3>
        <NumberFormat 
          
          onValueChange={ (data) => {
            this.handleChange(data.value); 
          }} 
        
          value={this.props.amount} 
          thousandSeparator={true} 
          prefix={'$'} />
        { this.state.message  && 
            <p className="label--error">
              { this.state.message }
            </p>
        }  
      </div> 
    );
  }
}
