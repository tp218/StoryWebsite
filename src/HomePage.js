import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Typography } from "@mui/material";
import stock_image from './assets/guy reads.jpg'


function RenderHomePage(){
    return (
      <div className="App">
        <div>
          <img src={stock_image} className="stock-photo"/>
        </div>
        <header className="App-header">
          <Typography sx={{paddingLeft: 2}}>
            About us
          </Typography>
        </header>
        <p className="paragraph-body">
          <Typography>
            JPStories is a website dedicated to sharing short stories
          </Typography>
        </p>
      </div>
    );
}

export default RenderHomePage;
