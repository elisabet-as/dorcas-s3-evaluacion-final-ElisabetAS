import React, { Component } from 'react';

class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {handleChangeInputValue}=this.props;
        return ( 
            <div>
            <input type="text" onChange={handleChangeInputValue}/>
            </div>
         );
    }
}
 
export default Filters;