import React, { use, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from "@mui/material";


//Lists That Hold The Stories, And Their File Names
const NEW_STORIES = {
  "Steven The Bird": "Steven.pdf"
}

const OTHER_STORIES = {
  "Steven The Bird": "Steven.pdf"
}

const ALL_STORIES = {
  "Steven The Bird": "Steven.pdf"
}





//Function To Render The List Of New Stories
function RenderNewStories(){


  //Takes The List, Then Indexes Each Story By The Title To Create A List Of References That Can Route To The Display Page
  //Using The Indexes To Route To The PDF Display Page, This Is How Each Render Function Works
  return(
    <div className="story-title">
      <div>
        <ul>
          {Object.keys(NEW_STORIES).map((title) => (
            <li key={title} className="story-list">
              <a href={`/stories/read/${NEW_STORIES[title]}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


//Function To Render The Stories That Are Not New
function RenderOtherStories(){
  return(
    <div className="story-title">
      <div>
        <ul>
          {Object.keys(OTHER_STORIES).map((title) => (
            <li key={title} className="story-list">
              <a href={`/stories/read/${OTHER_STORIES[title]}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//Function To Actually Render The Ead Page
function RenderReadPage(){

  //State Variable That Determines If The User Has Clicked The "New Stories" Tab
  const [lookingAtNew, setlookingAtNew] = useState(false);
  
  //Function To Toggle Whether The User Has Expanded The "New Stores" Tab
  function toggleNew(){
    if(lookingAtNew){
      setlookingAtNew(false);
    } else {
      setlookingAtNew(true);
    }
  }

  //State Variable That Determines If The User Has Clicked The "Other Stories" Tab
  const [lookingAtRest, setlookingAtRest] = useState(false);
    
  //Function To Toggle Whether The User Has Expanded The "Other Stores" Tab
  function toggleRest(){
    if(lookingAtRest){
      setlookingAtRest(false);
    } else {
      setlookingAtRest(true);
    }
  }

  //State Variable To Hold The Data Currently Inside The Search Bar
  const [input, setinput] = useState('')

  //Function That Gets The Stories That Contain What Is Currently In The Search Bar
  const getFilteredStories = (input) => {
    if(!input){
      return [];
    }
    return Array.from(Object.keys(ALL_STORIES)).filter(story => story.includes(input));
  }


  //If There Is Currently Text In The Search Bar, Only Display The Stories That Contain
  //The Text In The Search Bar And Nothing Else
  if(input){

    return (

      <div className="app-read">

        {/* Input Field For The Search Bar */}
        <form className="search-bar">
          <input type="text" placeholder="Search Stories..." name="searchinput" size="50"
          onChange={(e) => setinput(e.target.value)}/>
        </form>

        {/* Displays The List Of Filtered Stories */}
        <ul>
          {getFilteredStories(input).map(title => (
            <li key={title} className="story-list">
              <a href={`/stories/read/${ALL_STORIES[title]}`}>{title}</a>
            </li>
          ))}
        </ul>

      </div>
    );
  }

  return (

    <div className="app-read">

      {/* Input Field For The Search Bar */}
      <form className="search-bar" >
        <input type="text" placeholder="Search Stories..." name="searchinput" size="50"
        onChange={(e) => setinput(e.target.value)}/>
      </form>

      {/* Tab For Viewing The New Stories */}
      <Button onClick={toggleNew} sx={{bgcolor: "white", textEmphasisColor: "green", color: "black", width: 700, height: 50, zIndex: 0, position: 'relative'}}>
          New Stories
      </Button>

      <div>
        {lookingAtNew? <RenderNewStories />: ""}
      </div>

      {/* Tab For Viewing The Not New Stories */}
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

