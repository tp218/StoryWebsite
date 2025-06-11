import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

const newstories = {
  "Steven The Bird": "./Stories/Steven.txt"
}





//function to render the list of new stories
function RenderNewStories(){

  const [readingStory, setReading] = useState(false);


  return(
    <div className="story-title">
      <div>
        <ul>
          {Object.keys(newstories).map((title) => (
            <li key={title}>
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
    <div>
      stores Sad
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

  return (
    <div className="App">
      <button onClick={toggleNew}>
          New Stories
      </button>
      <div>
        {lookingAtNew? <RenderNewStories />: ""}
      </div>
      <button onClick={toggleRest}>
          Other Stories
      </button>
      <div>
        {lookingAtRest? <RenderOtherStories />: ""}
      </div>
    </div>
  );
}

export default RenderReadPage;