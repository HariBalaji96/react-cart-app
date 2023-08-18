import React from "react";
import Nav from "./Nav";

const Header = ({ title, cart }) => {
  return (
    <header>
      <h1 className="main-title">{title}</h1>
      <Nav cart={cart} />
    </header>
  );
};

export default Header;
