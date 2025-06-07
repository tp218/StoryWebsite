import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function DisplayStory(pdf){

    function RenderPDF(pdf){
        return(
            <div>
                <iframe src={pdf} frameborder="0"></iframe>
            </div>
        );
    }

    return(
        <div>
            
        </div>
    );
}