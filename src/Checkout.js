import React from "react";
import "./Checkout.css";
import logo from "./jamazon.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={logo} alt="" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* item */}
          {/* item */}
          {/* item */}
          {/* item */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
