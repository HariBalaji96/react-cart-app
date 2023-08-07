import React, { useState } from "react";
import Display from "../components/Display";

const Products = ({ movies, setAPI }) => {
  const [heading, setHeading] = useState("Popular");
  return (
    <main>
      <div className="product-nav">
        <h2>{heading}</h2>
        <ul id="categories">
          <li onClick={(e) => setHeading("Popular")}>Popular</li>
          <li onClick={(e) => setHeading("Trending")}>Trending</li>
          <li onClick={(e) => setHeading("Top-Rated")}>Top-Rated</li>
          <li onClick={(e) => setHeading("Upcoming")}>Upcoming</li>
        </ul>
      </div>
      <Display />
    </main>
  );
};

export default Products;
