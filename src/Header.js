import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() { 
        return ( 
            <section className="Header">
                <div className="Title">
                    <h1>Pokemon-GO</h1>
                </div>
                <div className="Links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/pokemon">Pokemon List</NavLink>
                </div>
                {/* <NavLink to="/pokemon/:id">Pokemon Information</NavLink> */}
            </section>
         );
    }
}
 
export default Header;