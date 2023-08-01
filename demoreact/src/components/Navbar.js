import React from 'react'
import  './Video.css';
import prototype from 'react';

function Navbar({home,news}){
    return (    
<ul>
  <li><a href="#home">{home}</a></li>
  <li><a href="#news">{news}</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a  href="#about">About</a></li>
</ul>
    )
}
/*Navbar.prototype={
    home:prototype.string:prototype.Requiredable<string>
}*/
Navbar.defaultProps={
    home:'set title here',
    news:'About text here'
}

export default Navbar;