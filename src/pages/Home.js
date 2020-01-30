import React, { Component } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import axios from 'axios';
 
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          person: null
        }
        
      }

      handleInfo=(p1)=>{
        axios.get('https://node-fake-api.herokuapp.com/user/'+p1)
        .then(response =>  {
            //console.log('xxx=>',response);
            this.setState({ person : response.data.data });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      }
  render() {
    return <div>
        <div className="row">
           <Sidebar handleInput={this.handleInfo}/>
           <Content person = {this.state.person} />
           </div>
    </div>
  }
}
 
export default Home;