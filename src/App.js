import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : 'false'
    }
  }
  
  handleChange = (e) => {
    let target = e.target.id
    console.log(target)
    target === 'example1' ? this.history.push('/example1') :
    target === 'example2' ? this.history.push('/example2') : 
    this.history.push('/example3')
  }
  render(){
    return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/example1">
                <Example1/>
              </Route>
              <Route exact path="/example2">
                <Example2/>
              </Route>
              <Route exact path="/example3">
                <Example3/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
