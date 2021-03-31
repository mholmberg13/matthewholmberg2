import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Banner from './components/Banner.js'
import Main from './components/Main.js'
import OrderForm from './components/OrderForm.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
