import React, { useState } from "react";
import logo from './assets/jpstories.png'
import './App.css';
import { Button, Typography, Box } from "@mui/material";


const Footer = () => {

    return (
        <div>
            <header className="App-header">
                <Typography sx={{paddingLeft: 2, fontWeight: "Bold"}}>
                    Contact us
                </Typography>
            </header>
            <Box sx={{  px: 5}}>
                <p className="paragraph-body">
                <Typography sx={{ wordWrap: 'break-word' }}>
                    Email: jpstories@gmail.com feedback form
                </Typography>
                </p>
            </Box>
          </div>
    );
}

export default Footer;