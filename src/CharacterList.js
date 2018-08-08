import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const {characters} = this.props;
        return (
            <div>
                <ul>
                {characters.map(function(character, index){
                    return (
                        <li key={index}>
                        <CharacterCard
                            characterName={character.name}
                            characterHouse={character.house}
                            characterImage={character.image}
                            />
                        </li>
                    );
                })}
                </ul>
            </div>
         );
    }
}
 
export default CharacterList;