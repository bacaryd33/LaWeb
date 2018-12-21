import React, { Component } from 'react';
import Mdp from "./Mdp.js";
import axios from 'axios';

class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          identifiant: '',
          mdp: '',
          mdpServ: '',
          logServ:''
          //login: [],
          //data: []
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      async handleSubmit(event) {
        if(this.state.identifiant == ""|| this.state.mdp==""){
          alert("renseigner un truc");
        }else{

        event.preventDefault();
        const url = '../membre.json';
        await axios.get(url)
          .then(response => {
            let taille = Object.keys(response.data).length
            let log=""
            let mdp=""
            for (let i = 0; i < taille; i++) {
              log=response.data[i].login 
              mdp=response.data[i].mdp
            }
            this.setState({
              mdpServ: mdp,
              logServ:log,
            });

          })
          .catch(error => {
            console.log(error);
          });
          
          if((this.state.mdp ===this.state.mdpServ) && (this.state.logServ ===this.state.identifiant)){
            alert("Bonjour " + this.state.identifiant + " !");

          }else{
            alert("Identifiant ou mot de passe incorrect.");   
          }

        
        }
        
      }
      

  render() {
    return (
        <div class="container">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <div class="text-center">
                        <h3><i class="fa fa-user fa-4x"></i></h3>
                        <h2 class="text-center">Connexion</h2>
                        <p>Saisissez votre identifiant et votre mot de passe</p>
                        <div class="panel-body">
          
                          <form id="register-form" role="form" autocomplete="off" class="form" onSubmit={this.handleSubmit}>
          
                            <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                <input id="identifiant" name="identifiant" placeholder="Identifiant" class="form-control"  type="text" onChange={e => this.setState({identifiant: e.target.value})}/>
                              </div>
                            </div>
                  
                  <div class="form-group">
                              <div class="input-group">
                              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input id="mdp" name="mdp" placeholder="Mot de passe" class="form-control"  type="password" onChange={e => this.setState({mdp: e.target.value})}/>
                              </div>
                            </div>

                            <div class="forgot">
						        <a href="/mdp">Mot de passe oublié?</a>
					        </div>

                            <br></br><input class="btn btn-danger btn-lg" type="submit" value="Se connecter" />
                          </form>
          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        </div>
        
    );
  }
}

export default Connexion;