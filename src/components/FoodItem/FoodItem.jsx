import React, { useContext, useState } from "react";
import "./FoodItem.css";

import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";

import { IoAddCircleOutline } from "react-icons/io5";
// Work: Update done

const FoodItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food_item_card" title={name} id="food-item-card">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>

      <div className="food-item-info">
        <h3 className="food_name">{name}</h3>
        <p className="food-item-desc">{desc}</p>
        <div className="price_add">
          <h3 className="price">${price}</h3>
          {!cartItems[id] ? (
            <div className="add_container">
              <IoAddCircleOutline
                className="add"
                title="add to cart"
                onClick={() => addToCart(id)}
                src={assets.add_icon_white}
              />
            </div>
          ) : (
            <div className="food-item-counter">
              <img
                src={assets.remove_icon_red}
                onClick={() => removeFromCart(id)}
                alt=""
              />
              <p className="food_items_count">{`${cartItems[id]}`}</p>
              <img
                src={assets.add_icon_green}
                onClick={() => addToCart(id)}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
