import React, { Component } from 'react';
import './ImageItem.css';

class ImageItem extends Component {
    state = {  }
    render() { 
        const {thing} = this.props
        return ( 
            <div className="pokemon-image">
                <li>
                    <h1>{thing.pokemon.toUpperCase()}</h1>
                </li>
                    <img alt={thing.pokemon} src={this.props.thing.url_image} />
                <li className="hidden-ability">
                    <h3>Hidden Ability:</h3>
                    <p>{thing.ability_hidden}</p>
                </li>
            </div>
         );
    }
}
 
export default ImageItem;