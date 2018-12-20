import React, { Component } from 'react';
import "./Accueil.css";
import "./Hunters.otf";

class Accueil extends Component {
  render() {
    return (
        <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-8 col-md-offset-2">
                           <p>
                               <div id="div_titreAccueil">
                                     ~ Qu'est-ce que la web ? ~
                                 </div>
                                 <div id="div_presentation" align="center">
                                     LaWeb est une association constituée d'étudiants et d'enseignants
                                     de l'université Jean Jaurès située à Toulouse.<div id="sautdeligne"></div>
                                     Elle a pour but d'aider et d'apportter de nouvelles connaissances
                                     dans des domaines autour de l'informatique.<div id="sautdeligne"></div>
                                     Elle propose un certains nombre d'activités ayant pour but d'initier
                                     ou d'approfondir vos connaissances autour d'ateliers et des évènements.<div id="sautdeligne"></div>
                            </div>
                           </p>
                           <br></br>
            </div>
        </div>
         <br>
         </br>
         <div class="col-sm-5">
             <a class="twitter-timeline" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw"
             data-width="500"
             data-height="500">
             Nos derniers tweets
             </a>
         </div>
         <div class="col-sm-2">
         </div>
         <div class="col-sm-5">
             <a class="twitter-timeline" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw"
             data-width="500"
             data-height="500">
             Nos dernier posts
             </a>
         </div>
     </div>
    );
  }
}

export default Accueil;