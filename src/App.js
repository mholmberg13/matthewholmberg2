import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import WebDev from './components/WebDev.js'
import Footer from './components/Footer.js';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path={'/webdevelopment'} component={ WebDev } />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
