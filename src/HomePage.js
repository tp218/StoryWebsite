import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Typography, Box } from "@mui/material";
import stock_image from './assets/guy reads.jpg'


//Code To Render The Front Page Of The Website
function RenderHomePage(){

    return (

      <div className="app">

        {/* The Stock Image That Displays On The Front Page */}
        <div>
          <img src={stock_image} className="stock-photo"/>
        </div>


        <Box sx={{  px: 20}}>

          <header className="app-header">
            <Typography sx={{paddingLeft: 2, fontWeight: "Bold"}}>
              About us
            </Typography>
          </header>

          {/* The "About Us" Paragraph That Appears On The Front Page */}
          <Box sx={{  px: 5}}>
            <p className="paragraph-body">
              <Typography sx={{ wordWrap: 'break-word' }}>
                Welcome! This is the official website for short stories written by me,
                JP, as well as stories written by other authors, we are committed to 
                providing quality stories for all to enjoy! My stories interestingly explore the
                struggles and thoughts of everyday people, I hope that through these stories, I am able to, 
                not only give you a sight into the lives of my characters, but also educate myself of the
                day-to-day life of people of all different cultures, identities, and lifestyles.
                I am passionate about the happiness of all people in the world and I firmly
                believe that if we could all come to a better understanding of each other,
                we would be living in a much better world. Click on "Read Stories" to get a look at our new stories
                as well as our entire story catalog. :)
              </Typography>
            </p>
          </Box>
        </Box>
      </div>
    );
}

export default RenderHomePage;
