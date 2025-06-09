import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';


const Navbar = () => {
    return (
        <nav>
            <div>
                JP Stories 
                <a href='/home'>Home </a>
                <a href="/stories">Read Stories </a>
            </div>
        </nav>
    );
}

export default Navbar;