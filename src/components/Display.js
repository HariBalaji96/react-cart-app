import React from "react";

import CartButton from "./CartButton";
const Display = ({ movies, setCart ,cart}) => {
  return (
    <div className="display-div">
      {movies.map((movie) => (
        <div className="card-div" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="movie-title">{movie.title}</p>
          <CartButton id={movie.id} setCart={setCart} movie={movie} cart={cart} />
        </div>
      ))}
    </div>
  );
};

export default Display;
