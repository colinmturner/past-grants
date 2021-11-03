import React from 'react';
import Form from 'react-bootstrap/Form';
// It's important to write Documentation!!!

class OrgTypeFilter extends React.Component {
    render() {
        const appState = this.props.appState;
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <h4><Form.Label>Organisation type</Form.Label></h4>
                        <Form.Control type="text" placeholder="Start typing ..." onChange={appState.checkOrgType} />
                    </Form.Group>
                </Form>
           </div>
        )
    }
}

export default OrgTypeFilter;