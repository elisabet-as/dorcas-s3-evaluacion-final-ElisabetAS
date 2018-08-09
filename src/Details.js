import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {characters} = this.props;
        return ( 
            <div>
            <img src={characters.image} alt="Character Photo"/>
            <h2>{characters.name}</h2>
            <p>Casa: {characters.house}</p>
            <p>Nacimiento: {characters.yearOfBirth}</p>
            <p>Patronus: {characters.patronus}</p>
            <p>Estado: {characters.alive}</p>
            </div>
        );
    }
}
 
export default Details;