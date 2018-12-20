import React, { Component } from 'react';



class FormulaireCard extends Component {
    
constructor(props) {

    super(props);
    
    this.state = {
    
    Nom: '',
    
    Prenom: '',
    mail:'',
    message:'',

    
    }
    
     
    
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    
     
    
    async handleSubmit(event) {
    
    alert('Nom: ' + this.state.Nom + ' Prénom: '+this.state.Prenom + ' mail: '+this.state.mail+ ' message: '+this.state.message);
    
    event.preventDefault();


  
    

    
    }
    
     
    
    render() {
    
    return (
        <div className="card mb">
            <div className="card-body mb">
            <h2 id="h252" class="h1-responsive font-weight-bold my-5">Nous Contacter ? </h2>


             <form onSubmit={this.handleSubmit}>
    
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon"></span>
        <input id="nom" name="nom" placeholder="Nom" class="form-control"  type="text"  onChange={e => this.setState({Nom: e.target.value})}/>
      </div>
    </div>

    <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon"></span>
        <input id="prenom" name="prenom" placeholder="Prenom" class="form-control"  type="text"  onChange={e => this.setState({Prenom: e.target.value})}/>
      </div>
    </div>
    
  
    
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon"></span>
        <input id="email" name="email" placeholder="Email" class="form-control"  type="email" onChange={e => this.setState({mail: e.target.value})}/>
      </div>
    </div>
    
    
    
    

    <div className="form-group">
          <div className="input-group ">
              <span className="input-group-addon"></span>
              <input id="message" name="message" placeholder="Message" class="form-control"  type="text"  onChange={e => this.setState({message: e.target.value})}/>
          </div>
    </div>
    
    <div className="form-group">
      <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Envoyer" type="submit" />
    </div>
    
    <input type="hidden" class="hide" name="token" id="token" value=""/>
     </form>
  
     </div>
    </div>
    
    






    /*
    <form onSubmit={this.handleSubmit}>
    
    <label>
    Nom:
    <input type="text" id="name" onChange={e => this.setState({Nom: e.target.value})} />
    </label>
    
    
    <label>
    Prénom:
    <input type="text" id="prenom" onChange={e => this.setState({Prenom: e.target.value})} />
    </label>



    <label>
    Mail:
    <input type="text" id="mail" onChange={e => this.setState({mail: e.target.value})} />
    </label>
    <label>
    
    Message
    
    <input type="text" id="message" onChange={e => this.setState({message: e.target.value})} />
    
    </label>
    
    
    
    <input type="submit" value="Submit" />
    
    </form>
    */
    
    
    
    );
    
    }
    
    }
    
    
    



export default FormulaireCard ;
