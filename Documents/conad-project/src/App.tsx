import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <div className="Navbar">
    <div className="title-logo">
    <img class="rt022-picture rt022-picture--init rt022-picture--cover rt051-header__logoStandard  "
     style="object-position: center center" src="/assets/icons/conad-logo.svg?_u=e442f961aafe40e5fe7c95186a2850aa925c8284" data-component="" alt="Conad - persone oltre le cose" id="rt022-picture-0"></img>
  </div>
  </div>
<div className="first-row">
  <img src="https://cdn-icons-png.flaticon.com/128/271/271220.png" loading="lazy"
    alt="Left arrow " title="Left arrow " ></img>
    <div className="first-text">I tuoi dati</div>
</div>
<div className="second-row">Tutti i campi sono obbligatori</div>
<form>
  <label htmlFor="name">Nome</label>
  <input type="text" id="name" name="name">
  <label htmlFor="name">Cognome</label>
  <input type="text" id="cognome" name="cognome">
  <br/>
  <label htmlFor="email">Indirizzo Email</label>
  <input type="email"id="email"name="email"/>
  <br/>
  <label htmlFor="email">Conferma indirizzo Email</label>
  <input type="email"id="conferma indirizzo email"/>
  <br/>
  <label htmlFor="password">Password</label>
  <input type="password"id="password"name="password"/>
  <br/>
  <label htmlFor="password">Conferma password</label>
  <input type="password"id="conferma password"name="conferma password"/>
  <input type="submit"value="submit"/> 
</form> 
</div>
  );
}

export default App;
