import React from 'react';
import Form from 'react-bootstrap/Form';
// It's important to write Documentation!!!

class ActiveFilter extends React.Component {
        
    render() {
        const appState = this.props.appState;
        return (
            <div>
                <h4>
                    <Form>
                        <Form.Check onChange={appState.checkActive}
                            type="switch"
                            id="custom-switch"
                            label="Active funding"
                            checked={appState.isActive}
                        />
                    </Form>
                </h4>
           </div>
        )
    }
}

export default ActiveFilter;