import React, { useState } from "react";
import logo from './assets/jpstories.png'
import './App.css';
import { Button } from "@mui/material";
 import { Link } from 'react-router-dom';


//Code For The Navbar At The Top Of The Website
const Navbar = () => {

    return (
        <nav>

            <div className="navbar">

                {/* When The Logo Is Pressed, We Route To The Home Page */}
                <div className="navbar-element">
                    <Link to={"/"}>
                        <img src={logo} className="photo"/>
                    </Link>
                </div>

                {/* The Individual Buttons On The Navbar That Route To Different Pages */}
                <div className="navbar-element">

                    <a className="navbar-text">
                        <Button href="/" sx={{bgcolor: "#184f18", color: "black"}}>Home</Button>
                    </a>

                    <a className="navbar-text">
                        <Button href="/stories" sx={{bgcolor: "#184f18", color: "black"}}>Read Stories</Button>
                    </a>

                    <a className="navbar-text">
                        <Button href="/contact" sx={{bgcolor: "#184f18", color: "black"}}>Contact Us</Button>
                    </a>
                     
                </div>

            </div>
        </nav>
    );
}

export default Navbar;