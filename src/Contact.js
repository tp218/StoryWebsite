import React, { useState } from "react";
import './App.css';
import { Typography, Box } from "@mui/material";


function RenderContactPage(){
    return (
        <div className="App-contact">
            <h1>
                Ways to provide feedback
            </h1>
            <h2>
                Our Email:
            </h2>
            <div>
                thejpstories@gmail.com
                <br>
                </br>
                Please provide any information on what we can do to improve the site!
            </div>
        </div>
    );
}

export default RenderContactPage