import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import DropDown from './DropDown.js';


class App extends Component {
  state = {query: null,
    sortOrder: 'all',
    data: []
  }
  fetchPokemon = async() => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
    let response = await fetch(url)
    let data = await response.json()
    this.setState({data: data.results})
  }
  componentDidMount() {
    this.fetchPokemon()
  }
  updateQuery = (e) => {
    this.setState({query: e.target.value})}
    render() { 
    return ( 
      <>
        <input type="text" onChange={this.updateQuery}/>
        <DropDown/>
        {/* <button onClick={this.state.query}>Search!</button> */}
        <h1>Pokemon App</h1>
        <ImageList pokemon={this.state.data}/>
        
      </>
     );
  }
}
 
export default App;
