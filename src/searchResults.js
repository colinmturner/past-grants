import React from 'react';
import ProjectCard from './projectCard';
// It's important to write Documentation!!!

class SearchResults extends React.Component {
    render() {
        const resProjs = this.props.state.resProjects;
        let i=1;
        //console.log(resProjs);
                return (
            <div>
                {resProjs.map(proj => {
                return <ProjectCard key={++i} proj={proj} />
                })}
            </div>  
        )
    }
}

export default SearchResults;