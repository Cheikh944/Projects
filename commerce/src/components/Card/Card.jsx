import './card.css';
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

export default function Card(props) {

  const { addToBag } = useCart();

  function handleChange(e){
    localStorage.setItem("product", JSON.stringify(e));
  }
    return (
        <div className="card">
          <Link onClick={() => handleChange(props.data)} to={`/Product/${props.data.name+props.data.id}`}><img className="card-image" src= {props.data.img} alt="" /></Link>
          <h2 className="name">{props.data.name}<i onClick={()=> addToBag(props.data)} className="fa-solid fa-bag-shopping"></i></h2>
          <p className="color">{props.data.bagColor}</p>
          <h3 className="price">{props.data.price} €</h3>
        </div>
    )
}