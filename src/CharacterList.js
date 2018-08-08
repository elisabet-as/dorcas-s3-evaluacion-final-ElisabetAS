import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            house: "",
            image: ""
         }
    }
    render() { 
        const {characters} = this.props;
        return ( 
            <div>
                <ul>
                {characters.map(function(){
                    return (
                        <li>
                        <CharacterCard/>
                        </li>
                    );
                })}
                </ul>
            </div>
         );
    }
}
 
export default CharacterList;