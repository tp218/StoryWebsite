import React, { useState } from "react";
import logo from './assets/jpstories.png'
import './App.css';
import { Button } from "@mui/material";


const Navbar = () => {

    return (
        <nav>
            <div className="navbar">
                <div className="navbar-element">
                    <img src={logo} className="photo"/>
                </div>
                <div className="navbar-element">
                    <a className="navbar-text">
                        <Button href="/" sx={{bgcolor: "#184f18", color: "black"}}>Home</Button>
                    </a>
                    <a className="navbar-text">
                        <Button href="/stories" sx={{bgcolor: "#184f18", color: "black"}}>Read Stories</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;