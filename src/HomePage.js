import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';


function RenderHomePage(){
    return (
      <div className="App">
        <div>
          PHOTO GOES HERE
        </div>
        <header className="App-header">
          About us
        </header>
        <p className="paragraph-body">
          JPStories is a website dedicated to sharing short stories
        </p>
      </div>
    );
}

export default RenderHomePage;
