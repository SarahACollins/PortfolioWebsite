import React, { Component } from 'react';
import './components/fonts.css'
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import LunarLanguages from './components/pages/LunarLanguages';
import Apothecary from './components/pages/Apothecary';

class App extends Component {
  render() {
    return(
      <>
        <Router>
          <ScrollToTop />
          <Route path='/PortfolioWebsite' exact component={Home} />
          <Route path='/LunarLanguages' component={LunarLanguages} />
          <Route path='/Apothecary' component={Apothecary} />
        </Router>
      </>
    );
  }
  }

export default App;
