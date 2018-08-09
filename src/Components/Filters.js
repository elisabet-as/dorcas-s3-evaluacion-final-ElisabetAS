import React, { Component } from 'react';
import '../Styles/Filters.css';

class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {handleChangeInputValue}=this.props;
        return ( 
            <div>
            <input className="input" type="text" onChange={handleChangeInputValue}/>
            </div>
         );
    }
}
 
export default Filters;