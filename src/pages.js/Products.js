import React, { useState } from "react";
import Display from "../components/Display";
import { requests } from "../api/requests";

const Products = ({ movies, setAPI, setCart ,cart}) => {
  const [heading, setHeading] = useState("Popular");
  const handleCategories = (category) => {
    setHeading(category);
    switch (category) {
      case "Popular": {
        setAPI(requests.popularRequest);
        break;
      }
      case "Trending": {
        setAPI(requests.trendingRequest);
        break;
      }
      case "Top-Rated": {
        setAPI(requests.topRatedRequest);
        break;
      }
      case "Upcoming": {
        setAPI(requests.upcomingRequest);
        break;
      }
    }
  };
  return (
    <main>
      <div className="product-nav">
        <h2>{heading}</h2>
        <ul id="categories">
          <li
            style={
              heading === "Popular"
                ? { color: "white", backgroundColor: "rgb(42, 137, 42)" }
                : {}
            }
            onClick={(e) => handleCategories(e.target.innerHTML)}
          >
            Popular
          </li>
          <li
            style={
              heading === "Trending"
                ? { color: "white", backgroundColor: "rgb(42, 137, 42)" }
                : {}
            }
            onClick={(e) => handleCategories(e.target.innerHTML)}
          >
            Trending
          </li>
          <li
            style={
              heading === "Top-Rated"
                ? { color: "white", backgroundColor: "rgb(42, 137, 42)" }
                : {}
            }
            onClick={(e) => handleCategories(e.target.innerHTML)}
          >
            Top-Rated
          </li>
          <li
            style={
              heading === "Upcoming"
                ? { color: "white", backgroundColor: "rgb(42, 137, 42)" }
                : {}
            }
            onClick={(e) => handleCategories(e.target.innerHTML)}
          >
            Upcoming
          </li>
        </ul>
      </div>
      <Display movies={movies} setCart={setCart} cart={cart}/>
    </main>
  );
};

export default Products;
