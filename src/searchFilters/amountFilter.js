import React from 'react';
import Form from 'react-bootstrap/Form';
// It's important to write Documentation!!!


class AmountFilter extends React.Component {
    constructor(props) {
        super(props);
    
        this.checkAmountFrom = this.checkAmountFrom.bind(this);
        this.checkAmountTo = this.checkAmountTo.bind(this);
        this.checkAmountFromTo = this.checkAmountFromTo.bind(this);

        this.state = { amountFrom: 0,  amountTo: 20000000 }
    }
    
    checkAmountFrom(e)   {
        this.setState( { amountFrom: e.target.valueAsNumber }, this.checkAmountFromTo() )
    }
    checkAmountTo(e)   {
        this.setState( { amountTo: e.target.valueAsNumber }, this.checkAmountFromTo() )
    }
    checkAmountFromTo()   {
        const checkAmount = this.props.appState.checkAmount;
        checkAmount([this.state.amountFrom, this.state.amountTo]);
    }

    render() {
        return (
            <div>
                <h4>Amount</h4>
                <>
                    <Form.Label>From: {this.state.amountFrom}</Form.Label>
                    <Form.Range onChange={this.checkAmountFrom} min="0" max={this.state.amountTo} value={this.state.amountFrom} />
                    <Form.Label>To: {this.state.amountTo}</Form.Label>
                    <Form.Range onChange={this.checkAmountTo} style={ { margin: '0 0 0 '+this.state.amountTo/2, width: ((this.state.amountTo - this.state.amountFrom)*100/this.state.amountTo)+'%'} } min={this.state.amountFrom} max="20000000" value={this.state.amountTo} />
                </>
           </div>
        )
    }
}

export default AmountFilter;