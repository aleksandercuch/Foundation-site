import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/home/home";
import Navbar from './components/navbar/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/'component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
