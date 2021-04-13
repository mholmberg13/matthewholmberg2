import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import WebDev from './components/WebDev.js'
import Footer from './components/Footer.js';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/webdevelopment' component={WebDev} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
