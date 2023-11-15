import './style/product.css'
import React, { useState, useEffect } from "react";
import {useCart} from "../context/CartContext";

const Product= () => {
    const [product , setProduct] = useState("");
    const { addToBag } = useCart();
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("product"));
        if (data) {
          setProduct(data);
        }
      }, []);

  return (
    <div>
      <section className="bag-content">
        <div className="bag-img">
            <img src={`../${product.img}`} alt="" />
        </div>
        <div className="description">
            <h1>{product.name}</h1>
            <h2>{product.bagColor}</h2>
            <h3>{product.price} €</h3>
            <div className="promo">
                <div className="first">
                    <div className="text-promo">
                        <h1>Get upto 30% Off on order value above $100</h1>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="code">
                        <h1>Use Code</h1>
                        <p>ORDER100</p>
                    </div>
                </div>
            </div>
            <div className="add">
                <button onClick={() => addToBag(product)} className="baglist">Add to bag</button>
                <button className="wishlist">Add to wishlist</button>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Product