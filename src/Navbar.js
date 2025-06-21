import React, { useState } from "react";
import logo from './assets/jpstories.png'
import './App.css';
import { Box, Typography } from "@mui/material";


const Navbar = () => {

    return (
        <nav>
            <div className="navbar">
                    <img src={logo} className="photo"/>
                    <a href='/' className="navbar-text">
                        <Typography variant="h5">Home</Typography>
                    </a>
                    <a href="/stories" className="navbar-text">
                        <Typography variant="h5">Read Stories</Typography>
                     </a>
            </div>
        </nav>
    );
}

export default Navbar;