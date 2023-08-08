import React, { useState } from "react";
import Display from "../components/Display";
import { requests } from "../api/requests";

const Products = ({ movies, setAPI }) => {
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
          <li onClick={(e) => handleCategories(e.target.innerHTML)}>Popular</li>
          <li onClick={(e) => handleCategories(e.target.innerHTML)}>
            Trending
          </li>
          <li onClick={(e) => handleCategories(e.target.innerHTML)}>
            Top-Rated
          </li>
          <li onClick={(e) => handleCategories(e.target.innerHTML)}>
            Upcoming
          </li>
        </ul>
      </div>
      <Display movies={movies} />
    </main>
  );
};

export default Products;
