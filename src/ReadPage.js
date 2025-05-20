import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

const newstories = ["story"];

//function to render the list of new stories
function RenderNewStories(){
  return(
    <div className="story-title">
      {DisplayStories(newstories)}
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

function DisplayStories(storylist){
  return(
    <div>
      <ul>
        {storylist.map((story, index) => (
          <li key={story}>{story}</li>
        ))}
      </ul>
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