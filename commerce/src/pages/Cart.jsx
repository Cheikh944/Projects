import React, { useState, useEffect } from "react";
import './style/cart.css'
import CartCard from "../components/cartCard/CartCard";
import {useCart} from "../context/CartContext";
import { Summary } from "../components/Summary/Summary";
function Cart() {
  
  const [cards , setCards] = useState();
  const { cart } = useCart();

    useEffect(() => {
      if (cart) {
        setCards(Object.values(cart).map(item => {
          return (
              <CartCard key={item.id} product = {item}/>
          )
        }))  
      } 
    },[cart]); 

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cartBuy">
           <p className="product-img">Product</p>
           <p className="Name-header">Name</p>
           <p className="price-header">Price</p>
           <p className="quantity-header">Qty</p>
           <p className="total-header">Subtotal</p>
        </div>
        {cards}
      </div>
      <Summary/>
    </div>
  );
}

export default Cart;