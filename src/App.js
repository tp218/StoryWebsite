import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import RenderHomePage from './HomePage.js';
import RenderReadPage from './ReadPage.js';

function App() {


  //Variable to decide whether the current user is reading stories or looking at the main page
  const [isreading, setisreading] = useState(false);

  //Function to toggle what page the current user is looking at
  function TogglePage(){
    if(isreading){
      setisreading(false);
    } else {
      setisreading(true);
    }
  }

  return(
    <div>
      <div className="header">
        <div className="header-logo">
          LOGO
        </div>
        <button onClick={TogglePage}>
          {isreading ? "Home" : "Stories"}
        </button>
      </div>
      <div>
        {isreading ? <RenderReadPage /> : <RenderHomePage />}
      </div>
    </div>
  );
}

export default App;
