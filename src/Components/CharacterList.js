import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import '../Styles/CharacterList.css';

class CharacterList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { characters } = this.props;
        return (
            <div>
                <ul className="characterList">
                    {characters.map(function (character, index) {
                        return (
                            <li className="character" key={index}>
                                <Link to={`/character/${character.id}`}>
                                    <CharacterCard
                                        characterName={character.name}
                                        characterHouse={!character.house ? 'WITHOUT HOUSE' : character.house}
                                        characterImage={character.image}
                                    />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default CharacterList;