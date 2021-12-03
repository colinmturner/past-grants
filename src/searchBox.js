import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// It's important to write Documentation!!!

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.setPhrase = this.setPhrase.bind(this);
        this.enterSearch = this.enterSearch.bind(this);
        this.state = { phrase: [] }
    }

    setPhrase(e){
        this.setState({phrase: e.target.value})
    }
    enterSearch(e)  {
        if (e.charCode === 13) {
            this.props.appState.checkSearchBox(e);
        }
    }
    render() {
        const resProjs = this.props.appState.resProjects;
        return (
            <>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={this.setPhrase} onKeyPress={this.enterSearch}
                    />
                    <Button variant="outline-secondary" value={this.state.phrase} id="button-addon2" onClick={this.props.appState.checkSearchBox}>
                    Search
                    </Button>
                </InputGroup>
                <p>(Example: Picnic, Garden, Youth)</p>
                <h5 className="gpbs">{resProjs.length} results</h5>
           </>
        )
    }
}

export default SearchBox;