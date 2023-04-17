import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../feature/cart/cartSlice";
import Card from "./Card";
import "./Cards.scss";

function Cards() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  if (cart.length == 0) {
    return (
      <div className="cart">
        <div className="container">
          <h1 className="cart-empty">Your bag is empty now!</h1>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <h1>YOUR BAG</h1>
        {cart.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
        <button
          className="btn cart-clear"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    );

}

export default Cards;
