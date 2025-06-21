import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import RenderHomePage from './HomePage.js';
import RenderReadPage from './ReadPage.js';
import Navbar from './Navbar.js';
import Story from './DisplayStory.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Box } from "@mui/material";



function App() {

  return(
    <Router>
      <div>
        <Box sx={{position: "fixed"}}>
          <Navbar />
        </Box>
        <div>
          <Switch>
            <Route exact path="/">
              <RenderHomePage />
            </Route>
            <Route exact path="/stories">
              <RenderReadPage />
            </Route>
            <Route path="/stories/read/:storytitle">
              <Story />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
