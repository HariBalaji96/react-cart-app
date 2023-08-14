import React, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const CartButton = ({ id, setCart, movie, cart }) => {
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
  const handleAdd = () => {
    const errorMsg = document.getElementById("error-msg" + id);
    if (count < 1) {
      errorMsg.style.display = "block";
    } else {
      errorMsg.style.display = "none";
      if(cart.length == 0){
        const newCart = [...cart, { ...movie, count: count }];
        setCart(newCart);
      }else{
        cart.forEach(element => {
          if(element.id==id){
            element.count = count;
          }else{
            const newCart = [...cart, { ...movie, count: count }];
            setCart(newCart);
          }
        });
      }
    }
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
        <button className="cart-button" onClick={() => handleAdd()}>
          OK
        </button>
      </div>
      <p className="error-msg" id={"error-msg" + id}>
        Error! You add atleast 1 in Quantity
      </p>
    </>
  );
};

export default CartButton;
