import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import DropDown from './DropDown.js';


class App extends Component {
  state = {query: '',
            sortOrder: 'all',
              data: [],
              sortOption: 'asc',
              loading: true,
  }
  sortOption = ['asc', 'desc']
  fetchPokemon = async() => {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    if (this.state.sortOption){
      url = url + `?sort=pokemon&direction=${this.state.sortOption}&pokemon=${this.state.query}`
    }
    let response = await fetch(url)
    let data = await response.json()
    setTimeout(() => {
        this.setState({data: data.results, loading: false})
    }, 1000);
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
    
    render() { 
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
            <button onClick={this.fetchPokemon}>Pokemon-GO</button>
          </div>
        </section>
        <div className="images">
          {this.state.loading && <h2>LOADING!!</h2>}
          {!this.state.loading &&
          <ImageList pokemon={this.state.data}/>
          }
        </div>
      </>
     );
  }
}
 
export default App;
