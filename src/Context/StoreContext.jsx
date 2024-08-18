import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [ordersData, setOrdersData] = useState({});

  // Load cart items from localStorage when the context initializes
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    const taxRate = 0.08; //this will be 7%

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find(
          (product) => product.food_id === Number(item)
        );
        totalAmount += itemInfo.food_price * cartItems[item];
      }
    }

    const taxAmount = totalAmount * taxRate;
    const totalWithTax = totalAmount + taxAmount;

    return {
      taxRate,
      totalAmount,
      totalWithTax,
    };
  };

  const contextValue = {
    food_list,
    menu_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
