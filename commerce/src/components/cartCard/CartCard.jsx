import './cartCard.css'
import { useCart, } from "../../context/CartContext";
import { useState, useEffect } from "react";

function CartCard(props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { deleteItem, cart, setCart } = useCart();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleDecrement = (e) => {
      Object.values(cart).map((product)=>{
        if(product.id === e.id){
          product.count = product.count - 1;
        }
        setCart({...cart , [product.id] : product});
        return product;
      })
      if(e.count <= 0){
        deleteItem(props.product);
      }
    };
    

    const handleIncrement = (e) => {
      Object.values(cart).map((product)=>{
        if(product.id === e.id){
          product.count = product.count + 1;
          console.log(product);
        }
        setCart({...cart , [product.id] : product});
        return product;
      })
    }
    
  return (
    <div className="card-grid">
        <img className="cardImg" src={props.product.img} alt="" />
        <p className="name">{props.product.name}</p>
        <p className="CartPrice">{props.product.price} €</p>
        <div className="quantity">
          <i onClick={()=>handleDecrement(props.product)} className="fa-solid fa-chevron-left"></i>
          <p>{props.product.count}</p>
          <i onClick={()=>handleIncrement(props.product)} className="fa-solid fa-chevron-right"></i>
          <button onClick={()=>deleteItem(props.product)}>Delete</button>
        </div>
        {screenWidth < 880 ? <div className="subTotal"><h3>Subtotal :</h3><p>{(props.product.price * props.product.count).toFixed(2)} €</p></div>:<p className="subTotal">{(props.product.price * props.product.count).toFixed(2)} €</p>}
    </div>
  );
}

export default CartCard;