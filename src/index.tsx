import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Live from './component/Live';
import Statement from './component/Statement';
import Flowers from './component/Flowers';

class App extends React.Component {
  render () {
    return (
      <Router basename={"/"}>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route path='/live' component={Live}/> 
          <Route path='/statement' component={Statement}/> 
          <Route path='/flowers' component={Flowers}/> 
        </Switch>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
