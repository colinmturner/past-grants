import React from 'react';
import Form from 'react-bootstrap/Form';
// It's important to write Documentation!!!

class OrgTypeFilter extends React.Component {
    render() {
        const appState = this.props.appState;
        return (
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <h6><strong><Form.Label>Organisation type</Form.Label></strong></h6>
                    <Form.Control type="text" placeholder="Start typing ..." onChange={appState.checkOrgType} />
                </Form.Group>
            </Form>
        )
    }
}

export default OrgTypeFilter;