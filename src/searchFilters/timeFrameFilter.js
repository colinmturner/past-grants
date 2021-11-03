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

    render() {
        return (
            <div>
                <h4>Time frame</h4>
                <>
                <Form.Label>From: {(new Date(this.state.timeFrom).toString())}</Form.Label>
                    <Form.Range onChange={this.checkTimeFrom} min={Date.parse('28 June, 2021')} max={this.state.timeTo} value={this.state.timeFrom} />
                    <Form.Label>To: {(new Date(this.state.timeTo).toString())}</Form.Label>
                    <Form.Range onChange={this.checkTimeTo} style={ { margin: '0 0 0 '+this.state.timeTo/2, width: ((this.state.timeTo - this.state.timeFrom)*100/(Date.parse('28 December, 2021') - Date.parse('28 June, 2021')))+'%'} } min={this.state.timeFrom} max={Date.parse('28 December, 2021')} value={this.state.timeTo} />
                </>
           </div>
        )
    }
}

export default TimeFrameFilter;