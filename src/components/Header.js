import React from "react";
import Nav from "./Nav";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="main-title">{title}</h1>
      <Nav />
    </header>
  );
};

export default Header;
