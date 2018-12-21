import React, { Component } from 'react';
import './Astuce.css';

class Astuce extends Component {
    render () {
        return(
            <div>
            <label className="card">
                <h1>Astuces</h1>
                <p></p>
                <p></p>
                <h2>
                    Vous avez un problème ? Nos astuces peuvent peut-être vous aider.
                </h2>
            </label>
            <p></p>

            <label id="titreactivite">ENT</label>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div id="Carousel1" className="carousel slide">
                            
                            <ol className="carousel-indicators">
                                <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                            </ol>
                            
                            {/* Carousel items */}
                            <div className="carousel-inner">
                                
                            <div className="item active">
                                <div className="row">
                                <div className="col-md-3"><p>Aide étudiant</p><a href="#" className="thumbnail"><img id="imgbox"src="../aide.png"/></a>
                                <h4>Si vous avez des problèmes avec l'ENT, que vous ne voyez pas apparaîtres vos cours ou que vous ne connaissez pas vos identifiants par exemple... cette page web peut vous aider :</h4>
                        <a href="http://www.univ-tlse2.fr/accueil/vie-des-campus/services-numeriques/aide-etudiant-210957.kjsp">Université Toulouse II aide étudiant</a>
                                </div>
                                <div className="col-md-3"><p>Aladin</p><a href="#" className="thumbnail"><img id="imgbox"src="../alladin.png" alt="Image"/></a>
                                    <h4>Si vous voulez déposer une demande qui concerne le site Campus Mirail voici le lien à suivre :</h4>
                                    <a href="https://aladin.univ-tlse2.fr/connecte">Université Toulouse II aladin</a>
                                </div>
                                </div>{/*.row*/}
                            </div>{/*.item*/}
                    </div>
                </div>
            </div>
            </div>
            </div>

            <label id="titreactivite">Logiciel libre</label>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div id="Carousel1" className="carousel slide">
                            
                            <ol className="carousel-indicators">
                                <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                            </ol>
                            
                            {/* Carousel items */}
                            <div className="carousel-inner">
                                
                            <div className="item active">
                                <div className="row">
                                <div className="col-md-3"><p>Calc</p><a href="#" className="thumbnail"><img id="imgbox"src="../calc.jpg" alt="Image"/></a></div>
                                </div>{/*.row*/}
                            </div>{/*.item*/}
                    </div>
                </div>
            </div>
            </div>
            </div>
        

          
            <label id="titreactivite">Sécurité</label>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div id="Carousel1" className="carousel slide">
                            
                            <ol className="carousel-indicators">
                                <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                            </ol>
                            
                            {/* Carousel items */}
                            <div className="carousel-inner">
                                
                            <div className="item active">
                                <div className="row">
                                <div className="col-md-3"><p>Espaces de travail</p><a href="#" className="thumbnail"><img id="imgbox"src="../secu.png" alt="Image"/></a></div>
                                <div className="col-md-3"><p>Site aide</p><a href="http://mass-cara2.univ-tlse2.fr/~massi.ouldrabah/Vulgarisation/Page/index.html" className="thumbnail"><img id="imgbox"src="../cybersecurite.jpg" alt="Image"/></a></div>
                                </div>{/*.row*/}
                            </div>{/*.item*/}
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Astuce;
