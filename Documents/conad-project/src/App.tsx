import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder="Nome" />
          <label htmlFor="surname"></label>
          <input
            type="text"
            id="cognome"
            name="cognome"
            placeholder="Cognome"
          />
        </div>
        <form>
          <div className="bottom-text">Campo obbligatorio</div>
          <br />
          <div className="rows">
            <label htmlFor="email"></label>
            <div className="indirizzo-email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Indirizzo Email"
              />
            </div>
            <br />
            <div className="conferma-indirizzo-email">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="conferma indirizzo email"
                placeholder="Conferma indirizzo email"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="password">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <br />
          <div className="conferma-password">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="conferma password"
              name="conferma password"
              placeholder="Conferma password"
            />
          </div>
          <input type="submit" value="continue" />
        </form>
      </form>
    </div>
  );
}

export default App;
