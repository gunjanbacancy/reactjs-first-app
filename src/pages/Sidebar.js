import React, { Component } from 'react';
import axios from 'axios';
 
class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
    
  }

  componentDidMount() {
    axios.get('https://node-fake-api.herokuapp.com/user/')
    .then(response =>  {
        this.setState({ persons : response.data.data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  hanldeSubmit(p1, e) {
    this.props.handleInput(p1);
  }

  render() {
    const { persons} = this.state;
    console.log(persons);
    return (
      <div class="side">
        <h2>User List</h2>
        { this.state.persons.map(person => <div onClick={this.hanldeSubmit.bind(this,person.id)} class="fakeimg" style={{ height: 60,marginBottom: "10px" }}>{person.first_name}</div>)}
      </div>
    );
  }
}
 
export default Sidebar