import React from "react";

const Nav = () => {
  return (
    <nav>
      <form className="search-form" autoComplete="off">
        <input type="text" placeholder="Search Products"/>
      </form>
      <ul>
        <li>Products</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Nav;
