import React, { Component } from 'react';

class DropDown extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <select onChange={this.props.changeEvent} defaultValue='asc'>
                    {this.props.options.map(option => {
                        return <option key={option} value={option}>{option}ending</option>
                    })}
                </select>
            </>
        );
    }
}
 
export default DropDown;