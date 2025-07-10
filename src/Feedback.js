import React, { useState } from "react";
import './App.css';
import { Typography, Box } from "@mui/material";

function FeedbackForm(){
    return(
        <div>
            <form>
                <label> Name
                    <input type="text" />
                </label>
                <label> Please Enter Your Feedback Here:
                    <input type="text" />
                </label>
            </form>
        </div>
    );
}

export default FeedbackForm