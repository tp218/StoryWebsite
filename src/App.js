import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import RenderHomePage from './HomePage.js';
import RenderReadPage from './ReadPage.js';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return(
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/home">
              <RenderHomePage />
            </Route>
            <Route path="/stories">
              <RenderReadPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
