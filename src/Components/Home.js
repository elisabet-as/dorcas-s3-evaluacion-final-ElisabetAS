import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends Component {
    render() {
        const { characters, handleChangeInputValue, handleChangeSelectOption } = this.props;
        return (
            <div>
                <Filters handleChangeInputValue={handleChangeInputValue}
                         handleChangeSelectOption={handleChangeSelectOption} />
                <CharacterList characters={characters} />
            </div>
        );
    }
}

export default Home;