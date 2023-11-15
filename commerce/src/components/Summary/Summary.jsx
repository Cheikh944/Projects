import './summary.css'
import { useCart } from '../../context/CartContext';
import React, { useEffect, useState } from "react";

export const Summary = () => {

    const { cart } = useCart();
    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(Object.values(cart).reduce((acc, current) => {
            var add = parseFloat(current.price) * current.count;
            acc = acc + add;
            return acc;
          }, 0).toFixed(2));

      },[cart]);


  return (
    <div className="total">
      <h1>Order Summary</h1>
      <div className="total-card">
         <h2>Grand Total : <li className="grand-total">{total} €</li></h2>
      </div>
      <div className="placeOrder">
        <button>Place Order</button>
        <button>Continue Shopping</button>
      </div>
    </div>
  )
}
