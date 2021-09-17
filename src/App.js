// import './App.css';

import React from 'react';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { Home } from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div style={{margin:"4rem auto"}}>

    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/add" component={AddUser}/>
      <Route exact path="/edit/:id" component={EditUser}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
