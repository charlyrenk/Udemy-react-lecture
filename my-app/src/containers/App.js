import React, { Component, Fragment } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id:'sfsdf',name: 'Charly', age: 25},
      {id:'sfsdfasd',name: 'Satan', age: 666},
      {id:'sfsdfaaaa',name: 'Lumina', age: 28} 
    ],
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  // static getDerivedStateFromProps (props, state) { 
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentWillMount () {
  //   console.log('App.js component will mount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( (prevState, prop) => {
      return {
       persons: persons,
       changeCounter: prevState.changeCounter + 1
      } 
      });
  }



  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  };

  render() {
    console.log('[App.js] render')
    let persons = null;
     
    if (this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
          />;
    }


    //JSX
    return (

      <Fragment>
        <button onClick={() => {
          this.setState( {showCockpit: false});
          }}>
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated, 
          login: this.loginHandler }}>
          {this.state.showCockpit ?
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null}
            {persons}
          </AuthContext.Provider>
      </Fragment>
    );
      

    //What it compiles to
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default withClass(App, classes.App);
