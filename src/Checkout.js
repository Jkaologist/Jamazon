import React from "react";
import "./Checkout.css";
import logo from "./jamazon.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={logo} alt="" />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
