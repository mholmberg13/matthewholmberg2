import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import WebDev from './components/WebDev.js'
import Footer from './components/Footer.js';
import HomePage from './components/HomePage';
import ThreeDProto from './components/ThreeDProto.js';
import AboutMe from './components/AboutMe.js';
import ContactMe from './components/ContactMe.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <div className='content-wrapper'>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path={'/webdevelopment'} component={ WebDev } />
              <Route exact path={'/3dprinting-prototyping'} component={ ThreeDProto } />
              <Route exact path={'/about-me'} component={ AboutMe } />
              <Route exact path={'/contact-me'} component={ ContactMe } />
            </Switch>
          </div>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
