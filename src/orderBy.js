import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
//import projects from './projects';
// It's important to write Documentation!!!

class OrderBy extends React.Component {
    render() {
        const appState = this.props.appState;
        let key = 0;
        const projectKey = ['project_name', 'recipients', 'date', 'location', 'active', 'programme']; //['id', 'grant_href', 'project_name', 'recipients', 'date', 'summary', 'location', 'active', 'programme'];
        return (
            <div>
                <Dropdown>
                <h4><Dropdown.Toggle variant="success" id="dropdown-basic">
                        Order by
                    </Dropdown.Toggle></h4>

                    <Dropdown.Menu>
                        {projectKey.map(oBy => {
                            return <Dropdown.Item key={++key} eventKey={oBy} href="#" value={oBy} onSelect={appState.orderBy} onClick={appState.orderBy}>{oBy}</Dropdown.Item> 
                        })}
                    </Dropdown.Menu>
                </Dropdown>
           </div>
        )
    }
}

export default OrderBy;