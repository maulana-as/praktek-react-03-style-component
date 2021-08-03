import React from 'react';
import './App.css';
import { Navbar } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Test' component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
