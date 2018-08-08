import React, { Component } from 'react';
import CharacterList from './CharacterList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      characters: []
    }
  } 
  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({characters: json})
      console.log(json);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Harry Potter Characters</h1>
          <input type="text"/>
        </header>
        <main>
        <CharacterList characters={this.state.characters}/>
        </main>
      </div>
    );
  }
}

export default App;
