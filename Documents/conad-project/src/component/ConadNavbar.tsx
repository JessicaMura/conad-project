import React from "react";

const ConadNavbar = () => {
  return (
    <div className="App">
      <div className="Navbar">
        <div className="title-logo">
          <img
            className="rt022-picture rt022-picture--init rt022-picture--cover rt051-header__logoStandard "
            style={{ objectPosition: "center center" }}
            src="/assets/icons/conad-logo.svg?_u=e442f961aafe40e5fe7c95186a2850aa925c8284"
            data-component=""
            alt="Conad - persone oltre le cose"
            id="rt022-picture-0"
          />
        </div>
        <div className="first-row">
          <img
            src="https://cdn-icons-png.flaticon.com/128/271/271220.png"
            loading="lazy"
            alt="Left arrow "
            title="Left arrow "
          />

          <div className="first-text">I tuoi dati</div>
        </div>
        <div className="second-row">Tutti i campi sono obbligatori</div>
      </div>
    </div>
  );
};
export default ConadNavbar;
