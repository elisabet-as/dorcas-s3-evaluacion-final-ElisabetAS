import React, { Component } from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends Component {
    render() {
        const { characters } = this.props;
        const { handleChangeInputValue } = this.props;
        return (
            <div>
                <Filters handleChangeInputValue={handleChangeInputValue} />
                <CharacterList characters={characters} />
            </div>
        );
    }
}

export default Home;