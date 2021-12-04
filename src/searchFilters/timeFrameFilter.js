import React from 'react';
import Form from 'react-bootstrap/Form'
// It's important to write Documentation!!!

class TimeFrameFilter extends React.Component { 
    constructor(props) {
        super(props);
    
        this.checkTimeFrom = this.checkTimeFrom.bind(this);
        this.checkTimeTo = this.checkTimeTo.bind(this);
        this.checkTimeFromTo = this.checkTimeFromTo.bind(this);

        this.state = { timeFrom: Date.parse('28 June, 2021'),  timeTo: Date.parse('28 December, 2021') }
    }
    
    checkTimeFrom(e)   {
        this.setState( { timeFrom: e.target.valueAsNumber }, this.checkTimeFromTo() )
    }
    checkTimeTo(e)   {
        this.setState( { timeTo: e.target.valueAsNumber }, this.checkTimeFromTo() )
    }
    checkTimeFromTo()   {
        const checkTimeFrame = this.props.appState.checkTimeFrame;
        checkTimeFrame([this.state.timeFrom, this.state.timeTo]);
    }
    componentDidMount() {
        this.setState( {timeFrom: this.props.appState.isTimeFrame[0], timeTo: this.props.appState.isTimeFrame[1] } )
        console.log(this.props.appState.isTimeFrame[0], this.state)
    }

    render() {
        return (
            <>
                <h6><strong>Time frame</strong></h6>
                <Form.Label>From: {(new Date(this.state.timeFrom).toDateString())}</Form.Label>
                <Form.Label style={{ position: 'absolute', right: 0 }}>To: {(new Date(this.state.timeTo).toDateString())}</Form.Label>
                <div style={{position: 'relative'}}>
                    <Form.Range onChange={this.checkTimeFrom} 
                    style={ { margin: '0 0 0 '+this.state.timeTo/2, width: 50+'%' }}
                    min={this.props.appState.resetFilters.isTimeFrame[0]} max={this.state.timeTo} value={this.state.timeFrom} />
                    <Form.Range onChange={this.checkTimeTo} 
                    style={ { margin: '0 0 0 '+this.state.timeTo/2, width: 50+'%' }}// ((this.state.timeTo - this.state.timeFrom)*100/(this.state.timeTo - this.state.timeFrom))+'%'} } 
                    min={this.state.timeFrom} max={this.props.appState.resetFilters.isTimeFrame[1]} value={this.state.timeTo} />
                </div>
           </>
        )
    }
}

export default TimeFrameFilter;