import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderText from './headerText';
import OrderBy from './orderBy';
import SearchBox from './searchBox';
import SearchFilterSet from './searchFilterSet';
import SearchResults from './searchResults';
import projects from './projects';

//https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/ 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkActive = this.checkActive.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
    this.checkTimeFrame = this.checkTimeFrame.bind(this);
    this.checkFundingProg = this.checkFundingProg.bind(this);
    this.checkOrgType = this.checkOrgType.bind(this);
    this.checkLocation = this.checkLocation.bind(this);
    this.orderBy = this.orderBy.bind(this);
    this.checkSearchBox = this.checkSearchBox.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.getActive = this.getActive.bind(this);
    this.getAmount = this.getAmount.bind(this);
    this.getTimeFrame = this.getTimeFrame.bind(this);
    this.getFundingProg = this.getFundingProg.bind(this);
    this.getOrgType = this.getOrgType.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.getSearchBox = this.getSearchBox.bind(this);
    //this.checkAll = this.checkAll.bind(this);
    const resetFilters = {isActive: false, isAmount: [0, 20000000], isTimeFrame: [Date.parse('28 June, 2021'), Date.parse('28 December, 2021')], isFundingProg: '[^]*', isOrgType: '[^]*', isLocation: '[^]*', isOrder: 'date', isSearchBox: '[^]*'}
    this.state = { resProjects: projects,
                  checkActive: this.checkActive, checkAmount: this.checkAmount, checkTimeFrame: this.checkTimeFrame, 
                  checkFundingProg: this.checkFundingProg, checkOrgType: this.checkOrgType, checkLocation: this.checkLocation,
                  orderBy: this.orderBy, checkSearchBox: this.checkSearchBox,
                  //isActive: false, 
                  isActive: resetFilters['isActive'], isAmount: resetFilters['isAmount'], isTimeFrame: resetFilters['isTimeFrame'], isFundingProg: resetFilters['isFundingProg'], 
                  isOrgType: resetFilters['isOrgType'], isLocation: resetFilters['isLocation'], isOrder: resetFilters['isOrder'], isSearchBox: resetFilters['isSearchBox']
                };  
  }

  checkActive(e) {
    //this.setState({ isActive: e.target.checked }, this.checkAll);
    this.setState({ isActive: e.target.checked }, function callback() {
      //console.log(this.state.isAmount, this.state.resProjects);
      this.getActive(this.state.isActive);
    });
  }
  getActive(itis) {
    //console.log(itis)
    //const input = projects;
    const output = {};
    //output.isActive = itis ;
    output.resProjects = [];
    switch (itis) {
        case true:
          // Algorithm to filter out projects where "Active"=false and pass "projects" on to next in the chain
          //console.log('Is actually true');
          projects.map(proj => {
            if( proj['active'] === true ) {
              output.resProjects.push(proj);
            }
            return output.resProjects;
          })
          this.getAmount(this.state.isAmount, output.resProjects);
          //this.searchResults(output);
          break;
        case false:
          //console.log('Is actually false');
          //output.resProjects = input;
          this.getAmount(this.state.isAmount, projects);
          //this.searchResults(output);
          break;
        default:
            console.log('Neither true nor false');
    }
  }
  checkAmount(fromTo) {
    this.setState({ isAmount: fromTo }, function callback() {
      //console.log(this.state.isAmount, this.state.resProjects);
      this.getActive(this.state.isActive);
    });
  }
  getAmount(fromTo, input) {
    console.log(fromTo, input);
    //const input = this.state.resProjects;
    const minim = fromTo[0];
    const maxim = fromTo[1];
    const output = {};
    output.resProjects = [];
    // Algorithm that takes in min and max values and compares "amount" of each project and filters "input" accordingly
    input.map(proj => {
      if( proj['amount'] >= minim && proj['amount'] <= maxim ) {
        output.resProjects.push(proj);
      }
      return output.resProjects;
    })
    //console.log(output.resProjects);
    //output.resProjects = input;
    this.getTimeFrame(this.state.isTimeFrame, output.resProjects);
    //this.searchResults(output);
    // return output
  }
  checkTimeFrame(fromTo) {
    this.setState({isTimeFrame: fromTo}, function callback()  {
      //console.log(this.state.isTimeFrame, this.state.resProjects);
      this.getActive(this.state.isActive);
    });
  }
  getTimeFrame(fromTo, input) {
    console.log(fromTo, input);
    //const input = projects;
    const minim = fromTo[0];
    const maxim = fromTo[1];
    const output = {};
    output.resProjects = [];
    // Algorithm that takes in min and max values and compares "date" of each project and filters "input" accordingly
    input.map(proj => {
      if( proj['date'] >= minim && proj['date'] <= maxim ) {
        output.resProjects.push(proj);
      }
      return output.resProjects;
    })
    this.getFundingProg(this.state.isFundingProg, output.resProjects);
    //this.searchResults(output);
    //return output
  }
  checkFundingProg(e) {
    const phrase = new RegExp(e.target.value, 'i');
    this.setState({isFundingProg: phrase}, function callback()  {
      this.getActive(this.state.isActive);
    });
  }
  getFundingProg(phrase, input) {
    console.log(phrase, input);
    //const input = projects;
    const output = {};
    output.resProjects = [];
    // Algorithm that takes in value and compares "programme" of each project and filters "input" accordingly
    console.log(new RegExp(phrase))
    input.map(proj => {
      if( new RegExp(phrase).test(proj['programme']) === true ) {
        output.resProjects.push(proj);
      }
      return output;
    })
    this.getOrgType(this.state.isOrgType, output.resProjects);
    //this.searchResults(output);
    // return output
  }
  checkOrgType(e) {
    const phrase = new RegExp(e.target.value, 'i');
    this.setState({isOrgType: phrase}, function callback()  {
      this.getActive(this.state.isActive);
    });
  }
  getOrgType(phrase, input) {
    console.log(phrase, input);
    const output = {};
    output.resProjects = [];
    // Algorithm that takes in value and compares "orgType" of each project and filters "input" accordingly
    input.map(proj => {
      if( new RegExp(phrase).test(proj['orgType']) === true ) {
        output.resProjects.push(proj);
      }
      return output;
    })
  this.getLocation(this.state.isLocation, output.resProjects);
    //this.searchResults(output);
    // return output
  }
  checkLocation(e) {
    const phrase = new RegExp(e.target.value, 'i');
    this.setState({isOrgType: phrase}, function callback()  {
      this.getActive(this.state.isActive);
    });
  }
  getLocation(phrase, input) {
    console.log(phrase, input);
    const output = {};
    output.resProjects = [];
    // Algorithm that takes in value and compares "location" of each project and filters "input" accordingly
    input.map(proj => {
      if( new RegExp(phrase).test(proj['location']) === true ) {
        output.resProjects.push(proj);
      }
      return output;
    })
  this.getOrder(this.state.isOrder, output.resProjects);
    //this.searchResults(output);
    //return output 
  }
  orderBy(e) {
    const phrase = new RegExp(e.target.attributes[1].value);
    this.setState({isOrder: phrase}, function callback()  {
      this.getActive(this.state.isActive);
    });
  }
  getOrder(attribute, input) {
    console.log(attribute, input);
    const output = {};
    output.resProjects = input;
    switch(attribute)  {
      case 'project_name' || 'recipients' || 'location' || 'programme': 
        output.resProjects.sort(function compare(a, b) {
          if (a['project_name'] < b['project_name']) { // Compare Alphabetic
            return -1;
          }
          if (a['project_name'] > b['project_name']) { // Compare Alphabetic
            return 1;
          }
          // a must be equal to b
          return 0;
        })
        //return this.searchResults(output);   
        break;     
        case 'recipients': 
          output.resProjects.sort(function compare(a, b) {
            if (a['recipients'] < b['recipients']) { // Compare Alphabetic
              return -1;
            }
            if (a['recipients'] > b['recipients']) { // Compare Alphabetic
              return 1;
            }
            // a must be equal to b
            return 0;
          })
          //return this.searchResults(output);   
          break;     
          case 'location': 
            output.resProjects.sort(function compare(a, b) {
              if (a['location'] < b['location']) { // Compare Alphabetic
                return -1;
              }
              if (a['location'] > b['location']) { // Compare Alphabetic
                return 1;
              }
              // a must be equal to b
              return 0;
            })
            //return this.searchResults(output);   
            break;     
            case 'programme': 
              output.resProjects.sort(function compare(a, b) {
                if (a['programme'] < b['programme']) { // Compare Alphabetic
                  return -1;
                }
                if (a['programme'] > b['programme']) { // Compare Alphabetic
                  return 1;
                }
                // a must be equal to b
                return 0;
              })
              //return this.searchResults(output);   
              break;     
              case 'date': 
        output.resProjects.sort(function compare(a, b) {
          if (Date.parse(a['date']) < Date.parse(b['date'])) { // Compare Date
            return -1;
          }
          if (Date.parse(a['date']) > Date.parse(b['date'])) { // Compare Date
            return 1;
          }
          // a must be equal to b
          return 0;
        })   
        //return this.searchResults(output);     
        break;
      case 'active': 
        output.resProjects.sort(function compare(a, b) {
          if (a['active'] === false && b['active'] === true) { // Compare Boolean
            return -1;
          }
          if (a['active'] === true && b['active'] === false) { // Compare Boolean
            return 1;
          }
          // a must be equal to b
          return 0;
        })
        //return this.searchResults(output);   
        break;     
      default:
        //return this.searchResults(output);
    }
  //console.log(numbers);
    this.getSearchBox(this.state.isSearchBox, output.resProjects);
    //this.searchResults(output);
    // [1, 2, 3, 4, 5]    
  }
  checkSearchBox(e) {
    const phrase = new RegExp(e.target.value, 'i');
    this.setState({isSearchBox: phrase}, function callback()  {
      this.getActive(this.state.isActive);
    });
  }
  getSearchBox(phrase, input) {
    console.log(phrase, input);
    const output = {};
    output.resProjects = [];
    // Algorithm that takes in value and compares "name" and other fields of each project and filters "input" accordingly
    input.map(proj => {
      const projValues = proj['project_name']+' '+proj['recipients']+' '+proj['summary']+' '+proj['location']+' '+proj['programme'];
      if( new RegExp(phrase).test(projValues, 'i' ) === true ) {
        output.resProjects.push(proj);
      }
      return output;
    })
    this.searchResults(output);
    //return output
  }
  /*checkAll()  { // It's not working because they need to be in a callback chain
    this.getActive(this.state.isActive);
    /*this.getAmount(this.state.isAmount);
    this.getTimeFrame(this.state.isTimeFrame);
    this.getFundingProg(this.state.isFundingProg);
    this.getOrgType(this.state.isOrgType);
    this.getLocation(this.state.isLocation);
    this.getOrder(this.state.isOrder);
    this.getSearchBox(this.state.isSearchBox);* /
  }*/
  searchResults(input) {
    this.setState( input );
    console.log(input)
  }

  componentDidMount() {
    //this.searchResults();
  }

  render() {
    return (
      <div className="App">
        <HeaderText />
        <SearchBox appState={ this.state } />
        <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Search filters</Accordion.Header>
                <Accordion.Body>
                  <SearchFilterSet appState={ this.state } />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <OrderBy appState={ this.state } />
        <SearchResults state={ this.state } />
      </div>
    );
  }
}
export default App;