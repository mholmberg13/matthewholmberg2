import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import OrderForm from './components/OrderForm.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <OrderForm/>
      </div>
    );
  }
}

export default App;
