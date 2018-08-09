import React, { Component } from 'react';
import '../Styles/Details.css';

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {characters} = this.props;
        const {id} = this.props.match.params;
        const detailsOfCharacters = characters[id];
        console.log(detailsOfCharacters)
        if (detailsOfCharacters === undefined) {
            return 'Loading...'
        } else {
            return ( 
            <div className="detailsContainer">
                <img className="imageOfDetails" src={detailsOfCharacters.image} alt="Character Photo"/>
                <section className="characterInfo">
                <h2 className="nameOfDetails">{detailsOfCharacters.name}</h2>
                <div className="spanInfoContainer">
                <span className="info">House: {!detailsOfCharacters.house ? 'WITHOUT HOUSE' :detailsOfCharacters.house}</span>
                <span className="info">Birth: {!detailsOfCharacters.yearOfBirth ? 'UNKNOWN DATE' :detailsOfCharacters.yearOfBirth}</span>
                <span className="info">Patronus: {!detailsOfCharacters.patronus ? 'WITHOUT PATRONUS' :detailsOfCharacters.patronus}</span>
                <span className="info">State: {!detailsOfCharacters.alive ? 'Died' :'Alive'}</span>
                </div>
                </section>
            </div>
            );
        }  
    }
}
 
export default Details;