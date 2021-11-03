import React from 'react';
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
            <div>
                <h4>Search filters</h4>
                <p>Dropdown or accordian container that reveals various tools for adjusting filter parameters.</p>
                <ActiveFilter appState={appState} />
                <AmountFilter appState={appState} />
                <TimeFrameFilter appState={appState} />
                <FundingProgFilter appState={appState} />
                <OrgTypeFilter appState={appState} />
                <LocationFilter appState={appState} />
           </div>
        )
    }
}

export default SearchFilterSet;