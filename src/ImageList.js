import React, { Component } from 'react';
import './ImageList.css'
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    state = {  }
    render() { 
        const {pokemon} = this.props
        return ( 
           
            <ul>
                {pokemon.map((character) => {
                    return <ImageItem key={character.id} thing={character}/>
                })}
            </ul>
         );
    }
}
 
export default ImageList;