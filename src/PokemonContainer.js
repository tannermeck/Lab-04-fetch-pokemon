import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import DropDown from './DropDown.js';

class PokemonContainer extends Component {
    state = {query: '',
              data: [],
              sortOption: 'asc',
              loading: true,
              page: 1,
              totalPages: 1,
  }
  sortOption = ['asc', 'desc']
  
  fetchPokemon = async() => {
    if (!this.state.loading){
      this.setState({loading: true})
    }
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if (this.state.sortOption){
      url = url + `?sort=pokemon&direction=${this.state.sortOption}&pokemon=${this.state.query}&page=${this.state.page}`
    }
    let response = await fetch(url)
    let data = await response.json()
    const totalPages = Math.ceil(data.count / data.perPage);
    setTimeout(() => {
        this.setState({data: data.results, loading: false, totalPages})
    }, 500);
  }
  componentDidMount() {
    this.fetchPokemon();
  }
  handleChange = async(e) => {
    await this.setState({sortOption: e.target.value})
    this.fetchPokemon();
  }
  updateQuery = (e) => {
    this.setState({query: e.target.value})}
  findPokemon = async() => {
    await this.setState({page: 1})
    this.fetchPokemon();
  }
  previousPage = async() => {
    await this.setState({page: this.state.page - 1})
    this.fetchPokemon()
  }
  nextPage = async() => {
    await this.setState({page: this.state.page + 1})
    this.fetchPokemon()
  }
    
    render() { 
      console.log(this.state.data)
      console.log(this.totalPages)
    return ( 
      <>
        <section className="body">
          <div>
            <h1>Pokemon App</h1>
          </div>
          <div className="search">
            <p>Search:</p>
            <input type="text" onChange={this.updateQuery}/>
            <DropDown className="drop-down"
              changeEvent={this.handleChange}
              options={this.sortOption}/>
            <button onClick={this.findPokemon}>Pokemon-GO</button>
            <p>Current Page:</p>
            <p>{this.state.page} of {this.state.totalPages}</p>
            {this.state.page > 1 &&
            <button onClick={this.previousPage}>Prev</button>
            }
            {this.state.page < this.state.totalPages && 
            <button onClick={this.nextPage}>Next</button>
            }
          </div>
        </section>
        <div  className="images" >
          {this.state.loading && <img id="pokeball" alt="pokeball" src='https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif'/>}
          {!this.state.loading &&
          <ImageList pokemon={this.state.data}/>
          }
        </div>
      </>
     );
  }
}
 
export default PokemonContainer;