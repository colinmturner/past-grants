//import Button from '@restart/ui/esm/Button';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
//import Accordion from 'react-bootstrap/Accordion';
import ActiveFilter from './searchFilters/activeFilter';
import AmountFilter from './searchFilters/amountFilter';
import FundingProgFilter from './searchFilters/fundingProgFilter';
import LocationFilter from './searchFilters/locationFilter';
import OrgTypeFilter from './searchFilters/orgTypeFilter';
import TimeFrameFilter from './searchFilters/timeFrameFilter';
// It's important to write Documentation!!!

class SearchFilterSet extends React.Component {
    render() {
        const appState = this.props.appState;
        return (
            <>
                {/* <p>Clear filter buttons and ... Clear all link.</p>
                <Button variant="secondary" style={{position: 'relative', 'padding-right': 2+'em'}} disabled>First<CloseButton variant="white" style={{position: 'absolute', right: 0.25+'em'}} /></Button>
                */}
                <Container>
                    <Row>
                        <Col sm={8} style={{position: 'relative'}}>
                            <AmountFilter appState={appState} />
                            <TimeFrameFilter appState={appState} />
                        </Col>
                        <Col sm={4}>
                            <ActiveFilter appState={appState} />
                            <FundingProgFilter appState={appState} />
                            <OrgTypeFilter appState={appState} />
                            <LocationFilter appState={appState} />
                        </Col>
                    </Row>
                </Container>
           </>
        )
    }
}

export default SearchFilterSet;