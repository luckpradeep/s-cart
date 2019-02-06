import React, { Component } from 'react';
import ShoppingCart from './shopping-cart/shopping-cart';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
