import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const Display = ({ movies }) => {
  return (
    <div className="display-div">
      {movies.map((movie) => (
        <div className="card-div" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="movie-title">{movie.title}</p>
          <button className="cart-button">
            <BsFillCartPlusFill size={20} /> Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Display;
