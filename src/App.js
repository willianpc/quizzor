import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Home from './home/Home';
import CreateQuizz from './create_quizz/CreateQuizz';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/create_quizz" component={CreateQuizz}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;