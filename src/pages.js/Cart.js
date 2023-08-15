import React from "react";

const Cart = ({ cart }) => {
  return (
    <main>
      <div className="display-div">
        {cart.map((carts) => (
          <div className="card-div" key={carts.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${carts.poster_path}`}
              alt={carts.title}
            />
            <p className="movie-title">{carts.title}</p>
            <p className="movie-title">Count : {carts.count}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Cart;
