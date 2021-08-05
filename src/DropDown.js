import React, { Component } from 'react';

class DropDown extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <select>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </>
        );
    }
}
 
export default DropDown;