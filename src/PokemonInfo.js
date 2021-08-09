import React, { Component } from 'react';
import './PokemonInfo.css'

class PokemonInfo extends Component {
    state = { data: {} }

    updatePokemon = async()=> {
        const pokemon = this.props.match.params.id
        let url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokemon}`
        let response = await fetch(url);
        let data = await response.json()
        this.setState({data: data })
    }
    componentDidMount(){
        this.updatePokemon();
    }
    render() { 
        const { data } = this.state
        return ( 
            <body className="Pokemon-Info">    
               <h1>{data.pokemon}</h1>
                    <img src={data.url_image} alt="pokemonGo"/>
                <section className="Pokemon-Stats">
                    <div>
                        <h3>Height:</h3>
                        <p>{data.height}ft</p>
                    </div>
                    <div>
                        <h3>Weight:</h3>
                        <p>{data.weight}lbs</p>
                    </div>
                    <div>
                        <h3>Speed:</h3>
                        <p>{data.speed}mph</p>
                    </div>
                </section>
            </body>
         );
    }
}
 
export default PokemonInfo;