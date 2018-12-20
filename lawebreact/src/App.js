import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListeActivite from './ListeActivite.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-head">
          <meta charset="utf-8"/>
          <p>HEADER AYOUB</p>
          <link rel="stylesheet" href="../style/css.css"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,900" rel="stylesheet"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"/>
          <link rel="stylesheet" href="style/css.css"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,900" rel="stylesheet"/>
          <link href="http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>
        </header>

        <body>

          <label id="titreonglet">Apprends avec nous !</label>

          <label id="descriptiononglet">
              <h2>
                  Une Activité est un Évènement ou Atelier qui est encadrée par un membre de l’association.
                  Il y a un nombre maximum de participants qui peuvent s’inscrire à cette activité.
                  Elle est organisée à des dates/horaires précises et a lieu dans des locaux situés sur le campus du Mirail.
              </h2>
          </label>

          <a href ="proposerActivite.html" id="leftlink">Proposer une activité</a>
          <ListeActivite/>
        </body>
        <p>FOOTER EMMA</p>
      </div>
    );
  }
}

export default App;
