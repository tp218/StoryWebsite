import React, { useState } from "react";
import './App.css';
import { Typography, Box, Button } from "@mui/material";

function FeedbackForm(){

     const [input, setinput] = useState({
        name: '',
        body: ''
    })

    const handleChanges = (e) => {
        setinput({...input, [e.target.name]:[e.target.value]})
    }

    return(
        <div className="App-feedback">
            <Typography variant="h2">Feedback Form</Typography>
            <form>
                <div>
                    <label>
                        Your Name
                    </label>
                    <br></br>
                    <input size="34" type="text" placeholder="Enter Your Name" name="name"
                    onChange={(e) => handleChanges(e)}/>
                </div>
                <div>
                    <label>
                        Your Feedback
                    </label>
                    <br></br>
                    <textarea rows="4" cols="30" placeholder="Enter Your Feedback Here" id="body"
                    onChange={(e) => handleChanges(e)}></textarea>
                </div>
                <br></br>
                <Button sx={{bgcolor: "#add8e6", color: "black"}}> Submit </Button>
            </form>
        </div>
    );
}

export default FeedbackForm