import React from "react";
import image from "../images/trollface.jpeg"
import "../styles/Header.css"


function Header () {
    
    return (
    
    <header className="Header">
        <img className="Header--image" src={image} alt="trollface"></img>
        <h2 className="Header--title">Meme Generator</h2>
    </header>
        
    )
    
}

export default Header;