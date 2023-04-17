import React from "react";
import "./Nav.scss";
import { useSelector } from "react-redux";
// import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Nav({user}) {
  // const { amount } = useGlobalContext();
  const { amount } = useSelector((store) => store.cart);
  return (
    <>
      <div className="nav">
        <h1>UseReducer</h1>
        <div>
          <p>
            <i className="uil uil-shopping-basket"></i>
            <sup>{amount}</sup>
          </p>
          {user ? (
            <button>
              <Link to="/login" className="link">
                Login
              </Link>
            </button>
          ) : (
            <button>
              <Link to="/login" className="link">
                Register
              </Link>
            </button>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
