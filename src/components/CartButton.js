import React, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const CartButton = ({ id }) => {
  const [count, setCount] = useState(1);
  const handleCart = (event) => {
    event.target.style.display = "none";
    const countDiv = document.getElementById(id);
    countDiv.style.visibility = "visible";
  };
  const handleCancel = (event) => {
    const cartButton = document.getElementById("C" + id);
    cartButton.style.display = "block";
    const countDiv = document.getElementById(id);
    countDiv.style.visibility = "hidden";
  };
  return (
    <>
      <button
        id={"C" + id}
        className="cart-button"
        onClick={(e) => handleCart(e)}
      >
        <BsFillCartPlusFill size={20} /> Add to cart
      </button>
      <div id={id} className="count-div">
        <button className="cart-button" onClick={(e) => handleCancel(e)}>
          Cancel
        </button>
        <button className="cart-button" onClick={() => setCount(count - 1)}>
          <AiOutlineMinus />
        </button>
        <span className="product-count">{count}</span>
        <button className="cart-button" onClick={() => setCount(count + 1)}>
          <AiOutlinePlus />
        </button>
        <button className="cart-button">OK</button>
      </div>
    </>
  );
};

export default CartButton;
