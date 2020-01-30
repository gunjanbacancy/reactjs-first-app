import React,{Component} from 'react';
import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About'

import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {  


  render() {
    return (
      <Router>
        <Header />
        <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;