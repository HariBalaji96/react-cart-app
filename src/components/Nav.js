import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ cart }) => {
  return (
    <nav>
      <form className="search-form" autoComplete="off">
        <input type="text" placeholder="Search Products" />
      </form>
      <div className="link-div">
        <Link className="link-element" to="/">
          <div>Products</div>
        </Link>

        <Link className="link-element" to="/cart">
          <div>
            Cart<span className="element-count">{cart.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
