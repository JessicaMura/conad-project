import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<form>
  <label htmlFor="name"></label>
  <input type="text" id="name" name="name" value="Nome"/>
  <label htmlFor="name"></label>
  <input type="text" id="cognome" name="cognome" value="Cognome"/>
  <br/>
  <label htmlFor="email"></label>
  <input type="email" id="email"name="email" value="Indirizzo Email"/>
  <br/>
  <label htmlFor="email"></label>
  <input type="email" id="conferma indirizzo email" value="Conferma indirizzo email"/>
  <br/>
  <label htmlFor="password"></label>
  <input type="password"id="password"name="password" value="Password"/>
  <br/>
  <label htmlFor="password"></label>
  <input type="password"id="conferma password"name="conferma password" value="Conferma password"/>
  <input type="submit"value="submit"/> 
</form> 
  );
  };


export default App;
