import React from 'react';
import Form from 'react-bootstrap/Form';
// It's important to write Documentation!!!


class AmountFilter extends React.Component {
    constructor(props) {
        super(props);
    
        this.checkAmountFrom = this.checkAmountFrom.bind(this);
        this.checkAmountTo = this.checkAmountTo.bind(this);
        this.checkAmountFromTo = this.checkAmountFromTo.bind(this);

        this.state = { amountFrom: "",  amountTo: "" }
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
    componentDidMount() {
        this.setState( {amountFrom: this.props.appState.isAmount[0], amountTo: this.props.appState.isAmount[1] } )
        console.log('didMount')
    }

    render() {
        const a = this.state.amountFrom - this.props.appState.isAmount[0];
        const d = this.props.appState.isAmount[1] - this.state.amountTo;
        let fromWidth = 0.5;
        let toWidth = 0.5;
        if(a !== 0 || d !== 0) {
            fromWidth = 0.5 + a/(a + d) - d/(a + d);
            toWidth = 0.5 - a/(a + d) + d/(a + d);
            console.log(this.props.appState.isAmount[0]+': '+a+': '+a/(a + d));
            console.log(this.props.appState.isAmount[1]+': '+d+': '+d/(a + d));
        }
        return (
            <>
                <h6><strong>Amount</strong></h6>
                <Form.Label>From: {this.state.amountFrom}</Form.Label>
                <Form.Label
                //style={{ position:absolute, right: 0 }}
                >To: {this.state.amountTo}</Form.Label>
                <Form.Range onChange={this.checkAmountFrom} 
                //style={ { width: fromWidth*100+'%'} } 
                min={this.props.appState.resetFilters.isAmount[0]} max={this.state.amountTo} value={this.state.amountFrom} />
                <Form.Range onChange={this.checkAmountTo} 
                //style={ { width: toWidth*100+'%'} } 
                min={this.state.amountFrom} max={this.props.appState.resetFilters.isAmount[1]} value={this.state.amountTo} />
            </>
        )
    }
}

export default AmountFilter;