import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import '../Styles/App.css';
import Details from './Details';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      charactersFiltered: [],
      inputName: "",
      optionSelected: "",
      id: "",
    }
    this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    this.handleChangeSelectOption=this.handleChangeSelectOption.bind(this);
  }
  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => {
        return response.json();
      })
      .then(json => {
        let idCharacters = [];

        for (let i = 0; i < json.length; i++) {
          idCharacters[i] = {
            ...json[i],
            id: i
          }
        }
        this.setState({ characters: idCharacters })
      })
  }

  handleChangeInputValue(event) {
    const inputEvent = event.target;
    this.setState({ inputName: inputEvent.value });
    const filtering = this.state.characters.filter(function (character) {
        return character.name.toLowerCase().includes(inputEvent.value.toLowerCase());
    });
    
    this.setState({ charactersFiltered: filtering });
  }

  handleChangeSelectOption(event) {
    const {value} = event.target;
    this.setState({ optionSelected: value });
    const housesFiltered = this.state.characters.filter(function (character){
      return character.house === value;
    });

    this.setState({ charactersFiltered: housesFiltered});
  }

  render() {
    let filtered;
    if (this.state.charactersFiltered.length === 0) {
      filtered = this.state.characters;
    } else {
      filtered = this.state.charactersFiltered;
    }

    if (this.state.characters.length === 0) {
      return 'Loading...'
    } else {
      return (
        <div className="App">
          <header className="header">
            <h1 className="title">Harry Potter Characters</h1>
          </header>
          <main className="mainContent">
            <Switch>
              <Route
                exact
                path='/'
                render={() =>
                  <Home
                    handleChangeSelectOption={this.handleChangeSelectOption}
                    handleChangeInputValue={this.handleChangeInputValue}
                    characters={filtered} />}
              />
              <Route
                path='/character/:id'
                render={(props) =>
                  <Details
                    match={props.match}
                    characters={filtered}
                  />}
              />
            </Switch>
          </main>
        </div>
      );
    }
  }
}

export default App;
