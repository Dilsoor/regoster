import React from "react";
import Cards from "./Cards";
import { useEffect } from "react";
import { calculate } from "../../feature/cart/cartSlice"
import { useDispatch, useSelector } from "react-redux";

function Cart({user}) {
  const { total, cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculate());
  }, [cart]);

  return (
    <div>
      <h1>{user.name}</h1>
      <Cards />
      <div className="container">
        <p className="total-price">Total Price:{total}</p>
      </div>
    </div>
  );
}

export default Cart;
