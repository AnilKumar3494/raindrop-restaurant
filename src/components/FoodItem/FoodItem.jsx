import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

// Work: Update done

const FoodItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food_item_card" title={name} id="food-item-card">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />

        {!cartItems[id] ? (
          <img
            className="add"
            title="add to cart"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{`${cartItems[id]}`}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <h3>{name}</h3>
        <p className="food-item-desc">{desc}</p>
        <h3 className="food-item-price">${price}</h3>
      </div>
    </div>
  );
};

export default FoodItem;
