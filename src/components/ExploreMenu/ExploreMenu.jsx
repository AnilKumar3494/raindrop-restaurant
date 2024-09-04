import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <section className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>

      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              title={item.menu_name}
              className="explore-menu-list-item"
            >
              <a href="#food-item-card" className="menu_item_card">
                <img
                  src={item.menu_image}
                  className={category === item.menu_name ? "active" : ""}
                  alt={item.menu_name}
                />
                <h3>{item.menu_name}</h3>
              </a>
            </div>
          );
        })}
      </div>
      <hr />
    </section>
  );
};

export default ExploreMenu;
