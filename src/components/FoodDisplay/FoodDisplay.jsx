import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";
import Searchbar from "../Search/Searchbar";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter food_list based on category and search query
  const filteredFoodList = food_list.filter((item) => {
    return (
      (category === "All" || category === item.food_category) &&
      item.food_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section className="food-display" id="food-display">
      {category === "All" ? (
        <h1>Our Love Filled Menu Just For You</h1>
      ) : (
        <h1>Choose from our Exquisite {category}</h1>
      )}

      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="food-display-list">
        {filteredFoodList.map((item) => (
          <FoodItem
            key={item.food_id}
            image={item.food_image}
            name={item.food_name}
            desc={item.food_desc}
            price={item.food_price}
            id={item.food_id}
          />
        ))}
      </div>
    </section>
  );
};

export default FoodDisplay;
