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
            </div>
            <h2>
                Provide Direct Feedback
            </h2>
            <div>
                <a href="/feedback">
                    Our Feedback Form
                </a>
            </div>
        </div>
    );
}

export default RenderContactPage