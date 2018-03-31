import React, { Component } from 'react';
import './App.css';
// import Parent from './components/parent';
// import App1 from './components/app1';
// import App2 from './components/app2';
// import { Switch ,Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state={name:"",age:""}
  }
  componentDidMount() {
    fetch("http://localhost:100/user")
      .then(response => response.json())
      .then(data => this.setState({ name: data.name }));
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> {this.state.name} </p>
        {/* <Switch>
          <Route exact path='/' component={App1}/>
          <Route path='/app2/:id' component={App2}/>
        </Switch> */}
      </div>
    );
  }
}

export default App; 
