import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import projects from '../projects';
// It's important to write Documentation!!!

class LocationFilter extends React.Component {
    constructor(props) {
        super(props);
    
        this.locMenu = this.locMenu.bind(this);
        this.state = {locations : [], menuOpen: false }
    }
    locMenu(e)   {
        const phrase = new RegExp(e.target.value, 'i');
        console.log(phrase);
        const input = projects;
        const output = {};
        output.locations = [];
        switch (e.target.value.length) {
            case 0:
                output.menuOpen = false;
              break;
            default:
                output.menuOpen = true;
                //console.log(e.target.value.length+' No length value');
        }
        // Algorithm that takes in value and compares "location" of each project and filters "input" accordingly
        input.map(proj => {
            const loc = new RegExp(proj['location'], 'i');
            if( phrase.test(proj['location']) === true && loc.test(output.locations) === false ) {
                output.locations.push(proj['location']);
            }
        return output;
        })
        this.setState(output);
    }

    render() {
        const locations = this.state.locations;
        let key = 0;
        return (
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <h6><strong><Form.Label>Find location</Form.Label></strong></h6>
                        <Form.Control type="text" placeholder="Start typing ..." onChange={this.locMenu} />
                    </Form.Group>
                </Form>
                <Dropdown show={this.state.menuOpen}>
                    <h4><Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select
                    </Dropdown.Toggle></h4>
                    <Dropdown.Menu>
                        {locations.sort().map(loc => {
                            return <Dropdown.Item key={++key} href="#">{loc}</Dropdown.Item> 
                        })}
                    </Dropdown.Menu>
                </Dropdown>
           </> 
        )
    }
}

export default LocationFilter;