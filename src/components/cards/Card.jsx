import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, increment, decrement } from "../../feature/cart/cartSlice"


function Card({ id, title, price, img, amount }) {
  const dispatch = useDispatch()
  // const { removeItem, increment, decrement } = useSelector((store) => store.cart); 
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="asdf" />
      </div>
      <div className="text">
        <p>
          <b>{title}</b>
        </p>
        <p>${price}</p>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div className="counts">
        <button onClick={() => dispatch(increment(id))}>
          <i className="uil uil-arrow-circle-up"></i>
        </button>
        <span>{amount}</span>
        <button onClick={() => dispatch(decrement(id))}>
          <i className="uil uil-arrow-circle-down"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
