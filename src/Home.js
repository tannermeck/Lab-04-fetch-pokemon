import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="Home-Page">
                <div>
                    <h1>Welcome To Pokemon-GO</h1>
                </div>
                <div className="Details">
                    <ul>
                        <li>Search for your favorite pokemon by name</li>
                        <li>Sort in ascending or descending order</li>
                        <li>Click the image to view the details of the selected pokemon</li>
                        <li>View up to 20 pokemon per page and click the next and previous buttons to catch them all</li>
                    </ul>
                </div>
            </section>
         );
    }
}
 
export default Home;