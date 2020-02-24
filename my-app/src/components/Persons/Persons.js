import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromPropa(props,state) { 
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state;
  // }
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillRecieve')
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapShotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  // componentWillUpdate(){}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render () {
  console.log('[Persons.js] rendering...')
  return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age} 
          changed={(event) => this.props.changed(event, person.id)}
          key={person.id}
          isAuth={this.props.isAuthenticated}
        />
      );
    }); 
  }
 

}

export default Persons;