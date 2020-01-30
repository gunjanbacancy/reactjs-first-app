import React, { Component } from 'react';
 
class Greeting extends Component {
  render() {
    return <h2>{this.props.greeting}</h2>;
  }
}
 
export default Greeting;