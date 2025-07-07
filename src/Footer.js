import React, { useState } from "react";
import logo from './assets/jpstories.png'
import './App.css';
import { Button, Typography, Box } from "@mui/material";


const Footer = () => {

    return (
        <div>
            <Box sx={{  px: 5, bgcolor: "#3a7a3a"}}>
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