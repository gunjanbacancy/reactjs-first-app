import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
 
class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
         <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#" class="right">Contact</a>
      </div>
    );
  }
}
 
export default Navbar