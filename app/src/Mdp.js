import React, { Component } from 'react';

class Mdp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          adresse: ''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {
        alert('Adresse: '+this.state.adresse);
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
                            <h3><i class="fa fa-lock fa-lg"></i></h3>
                            <h2 class="text-center">Mot de passe oublié?</h2>
                            <p>Réinitialité votre mot de passe</p>
                            <div class="panel-body">
              
                              <form id="register-form" role="form" autocomplete="off" class="form" method="post" onSubmit={this.handleSubmit}>
              
                              <div class="form-group">
                              <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                <input id="email" name="email" placeholder="Email" class="form-control"  type="email" onChange={e => this.setState({adresse: e.target.value})}/>
                              </div>
                            </div>
    
                                <br></br><input type="submit" value="Réinitialiser le mot de passe" />
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

export default Mdp;