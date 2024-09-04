import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { Link } from "react-router-dom";

import { PiPlusSquareBold } from "react-icons/pi";
import { PiMinusSquareBold } from "react-icons/pi";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const { taxRate, totalAmount, totalWithTax } = getTotalCartAmount();

  const cartIsEmpty = totalAmount === 0.0;

  return (
    <div className="cart-container">
      {cartIsEmpty ? (
        <div className="empty-cart-message">
          <h2>Your Cart is Looking a Little Light!</h2>
          <p>Why not explore our exquisite menu and find something you love?</p>
          <Link to="/" className="button">
            Explore Our Menu
          </Link>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            {food_list.map((item) => {
              const quantity = cartItems[item.food_id] || 0;

              if (quantity > 0) {
                return (
                  <div key={item.food_id} className="cart-item">
                    <img
                      src={item.food_image}
                      alt={item.food_name}
                      className="cart-item-image"
                    />
                    <p>{item.food_name}</p>
                    <p>${item.food_price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <div
                        className="decrease_button"
                        onClick={() => decreaseQuantity(item.food_id)}
                        aria-label="Decrease quantity"
                      >
                        <PiMinusSquareBold />
                      </div>
                      <p>{quantity}</p>
                      <div
                        className="increase_button"
                        onClick={() => addToCart(item.food_id)}
                        aria-label="Increase quantity"
                      >
                        <PiPlusSquareBold />
                      </div>
                    </div>
                    <p>${(item.food_price * quantity).toFixed(2)}</p>
                    <TiDeleteOutline
                      className="remove-icon"
                      onClick={() => removeFromCart(item.food_id)}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-total">
            <h2>Your Total</h2>

            <div className="cart-total-details">
              <div className="subtotal">
                <p>Subtotal</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>

              <div className="taxamount">
                <p>{`Tax (${(taxRate * 100).toFixed(1)}%)`}</p>
                <p>${(totalAmount * taxRate).toFixed(2)}</p>
              </div>

              <hr />
              <div className="final-total">
                <p>Total</p>
                <p>${totalWithTax.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
