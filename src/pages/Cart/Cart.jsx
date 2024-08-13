import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <>
      {getTotalCartAmount() === 0.0 ? (
        <div className="empty_cart_message">
          <h2>Your Cart is looking a little light!</h2>
          <p>Why not explore our exquisite menu and find something you love?</p>
          <Link to="/" className="button">
            Explore Menu
          </Link>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item.food_id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.food_image} alt={item.food_name} />
                      <p>{item.food_name}</p>
                      <p>${item.food_price}</p>
                      <div>{cartItems[item.food_id]}</div>
                      <p>${item.food_price * cartItems[item.food_id]}</p>
                      <p
                        className="cart-items-remove-icon"
                        onClick={() => removeFromCart(item.food_id)}
                      >
                        <TiDeleteOutline />
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${getTotalCartAmount().toFixed(2)}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
