import React, { Component } from 'react';

class CharacterCard extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const {characterName, characterHouse, characterImage}=this.props;
        return ( 
            <div>
                <img src={characterImage} alt="Character Photo"/>
                <h2>{characterName}</h2>
                <p>{characterHouse}</p>
            </div>
         );
    }
}
 
export default CharacterCard;