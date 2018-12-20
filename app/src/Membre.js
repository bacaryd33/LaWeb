import React, { Component } from 'react';

class Membre extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          prenom: '', 
          adresse: '',
          numero: '',
          identifiant: '',
          mdp: '',
          newsletter: false};
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {
        alert('Nom: ' + this.state.name + ' Prénom: '+this.state.prenom+ ' Adresse: '+this.state.adresse + ' Numéro de téléphone: '+this.state.numero + ' Identifiant: '+this.state.identifiant + ' Mot de passe: '+this.state.mdp + "Newsletter?"+this.state.newsletter);
        event.preventDefault();
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
                        <h2 class="text-center">Vous voulez devenir membre?</h2>
                        <p>Faites votre demande ici</p>
                        <div class="panel-body">
          
                          <form id="register-form" role="form" autocomplete="off" class="form" method="post" onSubmit={this.handleSubmit}>
          
                            <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                <input id="name" name="nom" placeholder="Nom" class="form-control"  type="text" onChange={e => this.setState({name: e.target.value})}/>
                              </div>
                            </div>
                  
                  <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                <input id="prenom" name="prenom" placeholder="Prenom" class="form-control"  type="text" onChange={e => this.setState({prenom: e.target.value})}/>
                              </div>
                            </div>
                  
                  <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                <input id="email" name="email" placeholder="Email" class="form-control"  type="email" onChange={e => this.setState({adresse: e.target.value})}/>
                              </div>
                            </div>
                  
                  <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-phone"></i></span>
                                <input id="tel" name="tel" placeholder="Telephone" class="form-control"  type="text" onChange={e => this.setState({numero: e.target.value})}/>
                              </div>
                            </div>

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

                            <input type="checkbox" id="scales" name="scales" onChange={e => {if (e.target.value == "on") {this.setState({newsletter: true})}}}/>
                  <label for="scales">S'abonner aux newsletter</label>
                  
                  
                  <br></br><input type="submit" value="Devenir membre" />
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

export default Membre;
