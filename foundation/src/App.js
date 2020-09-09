import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/home/home";
import Navbar from './components/navbar/navbar';
import Admin from './components/admin/admin';
import DataBase from "./components/blog/subpages/dataBase";
import AllItems from "./components/blog/subpages/allItems";
import Events from "./components/blog/subpages/events";
import Important from "./components/blog/subpages/important";
import Memories from "./components/blog/subpages/memories";
import NewsPaper from "./components/blog/subpages/newsPaper";
import Training from "./components/blog/subpages/training";
import LoginByEmail from "./components/auth/login";
import RegisterByEmail from "./components/auth/register";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/blog/wszystko' component={AllItems} />
            <Route path='/blog/baza-danych' component={DataBase} />
            <Route path='/blog/wydarzenia' component={Events} />
            <Route path='/blog/wazne' component={Important} />
            <Route path='/blog/wspomnienia' component={Memories} />
            <Route path='/blog/prasowka' component={NewsPaper} />
            <Route path='/blog/szkolenia' component={Training} />
            <Route path='/logowanie' component={LoginByEmail} />
            <Route path='/rejestracja' component={RegisterByEmail} />
            <Route path='/' component={Home} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
