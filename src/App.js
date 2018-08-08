import React, { Component } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      characters: [],
      charactersFiltered: [],
      inputName: ""
    }
  this.handleChangeInputValue=this.handleChangeInputValue.bind(this);
  } 
  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({characters: json})
    })
  }

  handleChangeInputValue(event) {
    const inputEvent = event.target;
    this.setState({name: inputEvent.value});
    const filtering = this.state.characters.filter(function(character){
      return character.name.includes(inputEvent.value);
    });
    this.setState({charactersFiltered: filtering});
    console.log(filtering);
  }

  render() {
    let filtered;
    if (this.state.charactersFiltered.length === 0) {
      filtered = this.state.characters;
    } else {
      filtered = this.state.charactersFiltered;
    }

    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Harry Potter Characters</h1>
          <Filters handleChangeInputValue={this.handleChangeInputValue}/>
        </header>
        <main>
        <CharacterList 
          characters={filtered} />
        </main>
      </div>
    );
  }
}

export default App;
