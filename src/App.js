import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import './App.css';
import Details from './Details';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      characters: [],
      charactersFiltered: [],
      inputName: "",
      id: "" ,
    }
  this.handleChangeInputValue=this.handleChangeInputValue.bind(this);
  } 
  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({characters: json}, this.createIdForCharacter)
    })
  }

  createIdForCharacter (){
    for (let i=0; i<this.state.characters.length; i++) {
      this.state.characters[i] = {
        ...this.state.characters[i],
        id: i
      }
    }
  }

  handleChangeInputValue(event) {
    const inputEvent = event.target;
    this.setState({inputName: inputEvent.value});
    const filtering = this.state.characters.filter(function(character){
      //INTENTAR QUE SI NO HAY RESULTADOS PARA LA BUSQUEDA NO PINTEEEE
      if (inputEvent.value === null) {
        return 'Not results';
      } else {
      return character.name.includes(inputEvent.value);
      }
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
        <main className="mainContent">
          <Switch>
            <Route 
              exact 
              path='/' 
              render= { () => 
                <CharacterList
                  characters={filtered} /> }
            />
            <Route
              path='/character/:id'
              render= { () => 
                <Details
                  characters={filtered} /> }
            />
          </Switch>  
        </main>
      </div>
    );
  }
}

export default App;
