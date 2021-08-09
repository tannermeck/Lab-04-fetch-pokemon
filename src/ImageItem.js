import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ImageItem.css';

class ImageItem extends Component {
    state = {  }
    render() { 
        const {thing} = this.props
        return ( 
            <div className="pokemon-image">
                <Link to={`/pokemon/${thing._id}`}>
                    <li>
                        <h1>{thing.pokemon.toUpperCase()}</h1>
                    </li>
                        <img alt={thing.pokemon} src={this.props.thing.url_image} />
                    <li className="hidden-ability">
                        <h3>Hidden Ability:</h3>
                        <p>{thing.ability_hidden}</p>
                    </li>
                </Link>
            </div>
         );
    }
}
 
export default ImageItem;