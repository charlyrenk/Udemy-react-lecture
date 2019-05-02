import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
   input: ''
  };


  //checks for changes in the input and saves new value
  inputChangedHandler = (event) => {

    this.setState({ 
      input: event.target.value
    });
    
  }

  deleteCharacterHandler = (characterIndex) => {
    const text = this.state.input.split('');
    text.splice(characterIndex, 1);
    const updatedText = text.join('');
    this.setState({
      input: updatedText
    })
  }

  render() {

    const characters = 
        this.state.input.split('').map((character, index) => {
          return <CharComponent 
            char = {character}
            click={() => this.deleteCharacterHandler(index)}
            key = {index}
          />
        })
  
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" onChange={this.inputChangedHandler} value={this.state.input}/>
        <ValidationComponent 
        inputLength={this.state.input.length}
        />

        {characters}

      </div>
    );
  }
}

export default App;
