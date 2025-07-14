import React, { use, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from "@mui/material";

const newstories = {
  "Steven The Bird": "Steven.pdf"
}

const otherstories = {
  "No stories yet (DO NOT CLICK)" : "ahh"
}

const allstories = {
  "Steven The Bird": "Steven.pdf"
}





//function to render the list of new stories
function RenderNewStories(){


  return(
    <div className="story-title">
      <div>
        <ul>
          {Object.keys(newstories).map((title) => (
            <li key={title} className="story-list">
              <a href={`/stories/read/${newstories[title]}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


//Function to render the stories that are not nee
function RenderOtherStories(){
  return(
    <div className="story-title">
      <div>
        <ul>
          {Object.keys(otherstories).map((title) => (
            <li key={title} className="story-list">
              <a href={`/stories/read/${otherstories[title]}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


//A function to display a story
function DisplayStory(title){

  const [readingStory, setReading] = useState(false);

  //Function to toggle whether the current story is being read
  function toggleReading(){
    if(readingStory){
      setReading(false);
    } else {
      setReading(true);
    }
  }

  return(
    <div>
      <button onClick={toggleReading}>
        {title}
      </button>
      {readingStory? RenderPDF(newstories[title]) : ""}
    </div>
  );
}

//Function to render a pdf on the website |ADD IT TO THE REQUIRED PACKAGES|
function RenderPDF(pdf){
  return(
    <div>
        <iframe src={pdf} frameborder="0"></iframe>
    </div>
  );
}

function RenderReadPage(){
  const [lookingAtNew, setlookingAtNew] = useState(false);
  
  //Function to toggle whether the user has expanded the "New Stores" tab
  function toggleNew(){
    if(lookingAtNew){
      setlookingAtNew(false);
    } else {
      setlookingAtNew(true);
    }
  }

  const [lookingAtRest, setlookingAtRest] = useState(false);
    
  //Function to toggle whether the user has expanded the "Other Stores" tab
  function toggleRest(){
    if(lookingAtRest){
      setlookingAtRest(false);
    } else {
      setlookingAtRest(true);
    }
  }

  const [input, setinput] = useState({
    searchinput: ''
  })

  const handleChanges = (e) => {
    setinput({...input, [e.target.name]:[e.target.value]})
  }

  function displayStories(){
    <div className="story-title">
      <div>
        <ul>
          {Object.keys(allstories).map((title) => (
            <li key={title} className="story-list">
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  }


  return (
    <div className="App-read">
      <form className="search-bar" onSubmit={displayStories}>
        <input type="text" placeholder="Search Stories..." name="searchinput" size="50"
        onChange={(e) => handleChanges(e)}/>
        <Button sx={{color: "black", padding: "15"}}> Submit </Button>
      </form>
      <Button onClick={toggleNew} sx={{bgcolor: "white", textEmphasisColor: "green", color: "black", width: 700, height: 50, zIndex: 0, position: 'relative'}}>
          New Stories
      </Button>
      <div>
        {lookingAtNew? <RenderNewStories />: ""}
      </div>
      <Button onClick={toggleRest} sx={{bgcolor: "white", textEmphasisColor: "green", marginTop: 2, color: "black", width: 700, height: 50, zIndex: 0, position: 'relative'}}>
          Other Stories
      </Button>
      <div>
        {lookingAtRest? <RenderOtherStories />: ""}
      </div>
    </div>
  );
}

export default RenderReadPage;

