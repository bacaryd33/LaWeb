import React, { Component } from 'react';
import FormulaireCard from './FormulaireCard.js'
import InformationCard from './InformationCard.js'

class Card extends Component {
  render() {
    return (
        <div>
            <div className="row">
        <div className="col-md-5">
            <FormulaireCard/>

        </div> 
          <div className="col-md-2">
          </div> 
          
          <div className="col-md-5">
         
          <InformationCard/>

          
      </div> 
      </div>
      </div> 


      );
  }
}




export default Card;
