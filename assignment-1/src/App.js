import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = { 
      userName: 'Charly'  
  };

  changeUserNameHandler = (event) => {
    this.setState({ 
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Assignment 1</h1>
        <UserInput userName={this.state.userName} changeUserName={this.changeUserNameHandler} />

        <UserOutput userName={this.state.userName} nameTwo="Cream Cheese"/>
        <UserOutput userName={this.state.userName} nameTwo="Jelly"/>
        <UserOutput userName={this.state.userName} nameTwo="Syrup"/>
      </div>
    );
  }
}

export default App;
