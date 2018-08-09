import React, { Component } from 'react';
import './CharacterCard.css';

class CharacterCard extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const {characterName, characterHouse, characterImage}=this.props;
        return ( 
            <div>
                <img className="photo" src={characterImage} alt="Character Photo"/>
                <div className="textContainer">
                <h2 className="name">{characterName}</h2>
                <p className="house">{characterHouse}</p>
                </div>
            </div>
         );
    }
}
 
export default CharacterCard;