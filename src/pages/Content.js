import React, { Component } from 'react';
import Sidebar from './Sidebar';
 
class Content extends Component {

  render() {
    return (
      <div class="main">
        <h2>User Information</h2>
        <div>
        <p>{this.props.person?this.props.person.id:''}</p>
        <p>{this.props.person?this.props.person.first_name:''}</p>
        <p>{this.props.person?this.props.person.last_name:''}</p>
        <p>{this.props.person?this.props.person.email:''}</p>
        <p>{this.props.person?this.props.person.avatar:''}</p>
        </div>
      </div>
    );
  }
}
 
export default Content