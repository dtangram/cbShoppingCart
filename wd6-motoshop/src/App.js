/* Magnanimous Comic Book Shop
Author/Developer:  Douglas T. Angram
WDD-469 Project & Portfolio - Full Sail University
Source:  App.js
*/

import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MotoShopMenu from './components/MotoShopMenu'
import Home from './components/Home'
import motoCart from './components/motoCart'
// import Signup from './components/signup'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">

              <MotoShopMenu/>
              <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/motoCart" component={motoCart}/>
                    {
                      // <Route exact path="/signup" component={Signup}/>
                    }
                  </Switch>
             </div>
       </BrowserRouter>

    );
  }
}

export default App;
