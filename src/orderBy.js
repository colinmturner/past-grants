import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup'
// It's important to write Documentation!!!

class OrderBy extends React.Component {
    render() {
        const appState = this.props.appState;
        let key = 0;
        let active = false;
        const projectKey = ['project_name', 'recipients', 'date', 'location', 'active', 'programme']; //['id', 'grant_href', 'project_name', 'recipients', 'date', 'summary', 'location', 'active', 'programme'];
        return (
            <Accordion className="orderby" defaultActiveKey="">
                <Accordion.Item eventKey="0" className="searchout">
                    <Accordion.Header>Order by: {appState.isOrder} </Accordion.Header>
                    <Accordion.Body className="searcher">
                    <ListGroup>
                    {projectKey.map(oBy => {
                        if(appState.isOrder === oBy) { active = true } else { active = false }
                        return <ListGroup.Item action key={++key} eventKey={oBy} href="#" value={oBy} onClick={appState.orderBy} active={active} >{oBy}</ListGroup.Item>
                        })}
                    </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}

export default OrderBy;