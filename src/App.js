import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Banner from './components/Banner.js'
import OrderForm from './components/OrderForm.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
      </div>
    );
  }
}

export default App;
