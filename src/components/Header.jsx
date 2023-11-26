import React from "react";

function Header() {
  return(
    <header>
    <div className="header-inner">
      <span className="logo">radhika rajwani</span>
      <div className="links">
        <a className="link" href="#banner">
          Home
        </a>
        <a className="link" href="#services">
          Sevices
        </a>
        <a className="link" href="#experiences">
          Experience
        </a>
        <a className="link" href="#projects">
          Projects
        </a>
        </div>
    </div>
  </header>
);
}

export default Header;