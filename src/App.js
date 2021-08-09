import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonContainer from './PokemonContainer.js';
import Home from './Home.js';
import PokemonInfo from './PokemonInfo.js';
import Header from './Header.js';



class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/pokemon/:id" component={PokemonInfo}/>
            <Route path="/pokemon" component={PokemonContainer}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </>
     );
  }
}
 
export default App;
