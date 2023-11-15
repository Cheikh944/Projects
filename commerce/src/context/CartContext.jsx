import React, { createContext, useContext, useEffect, useState } from 'react';
const CartContext = createContext();


export const CartProvider = ({ children }) => {
    
    const initialCart = JSON.parse(localStorage.getItem('cart')) || {};
    const [cart, setCart] = useState(initialCart);
    
    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    function addToBag(e){
      setCart({...cart , [e.id] : e});
      console.log(cart)
    }
    
    function deleteItem(e) {
      e.count = 1;
      var newtab = Object.values(cart).reduce((acc, current) => {
        if (current.id !== e.id) {
          acc[current.id] = current;
        }
        return acc;
      }, {});
      setCart(newtab);
    }

    return (
      <CartContext.Provider value={{cart, setCart, deleteItem, addToBag}}>
        {children}
      </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};