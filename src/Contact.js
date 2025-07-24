import React, { useState } from "react";
import './App.css';
import { Typography, Box } from "@mui/material";
import logo from './assets/jpstories.png'


//Code For The Contact Page, With The Text That Is Displayed On The Page
function RenderContactPage(){
    return (
        <div className="app-contact">

            <h1>
                Ways to provide feedback
            </h1>

            <div className="contact-text">

                <div className="contact-sub">
                    Our Email:
                </div>

                thejpstories@gmail.com
            </div>

            <div>
                Please provide any information on what we can do to improve the site!
            </div>

            <div>
                <img src={logo} className="contact-photo"/>
            </div>
            
        </div>
    );
}

export default RenderContactPage