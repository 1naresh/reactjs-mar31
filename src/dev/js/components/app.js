import React, { Component } from 'react';
import UserList from '../containers/user.list';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div >
        <h2>user name list:</h2>
        <UserList/>
        <hr/>
        <h2>user details:</h2>
      </div>
    );
  }
}
export default App