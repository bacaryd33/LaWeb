import React, { Component } from 'react';
import './Section.css';
import {Animated} from "react-animated-css";


import Card from './Card.js';
import Card1 from './Card1.js';



class Section extends Component {
  render() {
    return (
 
<div>



<div className="row">




 <div className="container">
 <Animated animationIn="swing" animationOut="zoomOutDown" isVisible={true}>

  <img  id="logomassi"src="../images/mail.png"   height="100px" width="100px" />
  </Animated>
  
 </div>
 </div>
         


      



      <div className="row">
          <div className="container">
              
                  <Card/>
              
          </div>
      </div>


      


      <div className="row">
      <div className="container">
         
              <Card1/>
          
      </div>
  </div>
  </div>
  
    )


  }
}




export default Section;
