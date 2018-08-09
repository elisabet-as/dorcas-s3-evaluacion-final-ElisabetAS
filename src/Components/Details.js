import React, { Component } from 'react';
import '../Styles/Details.css';

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { characters, match } = this.props;
        const id = parseInt(match.params.id);
        let idCharacter = characters.filter(function (character) {
            return character.id === id;
        })

        return (
            <div>
                {idCharacter.map(function (detail, index) {
                    return (
                        <div className="detailsContainer" key={index}>
                            <img className="imageOfDetails" src={detail.image} alt="Character Photo" />
                            <section className="characterInfo">
                                <h2 className="nameOfDetails">{detail.name}</h2>
                                <div className="spanInfoContainer">
                                    <span className="info">House: {!detail.house ? 'WITHOUT HOUSE' : detail.house}</span>
                                    <span className="info">Birth: {!detail.yearOfBirth ? 'UNKNOWN DATE' : detail.yearOfBirth}</span>
                                    <span className="info">Patronus: {!detail.patronus ? 'WITHOUT PATRONUS' : detail.patronus}</span>
                                    <span className="info">State: {!detail.alive ? 'Died' : 'Alive'}</span>
                                </div>
                            </section>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Details;