import React, { Component } from 'react';
import '../Styles/Filters.css';

class Filters extends Component {
    render() {
        const { handleChangeInputValue, handleChangeSelectOption } = this.props;
        return (
            <div className="inputContainer">
                <input className="input" type="text" onChange={handleChangeInputValue} />
                <select name="houses" id="houses" onChange={handleChangeSelectOption}>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                </select>
            </div>
        );
    }
}

export default Filters;