
import ItemCount from "./ItemCount";
import { db, firebaseFetch } from "./Utils/FirebaseConfig";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContex  } from "./CartContext";
import Item from "./Item";




const ItemDetail = ({item}) => {

  const [itemCount, setItemCount] = useState(0)
  const test = useContext(CartContex);
  
  const onAdd = (qty)=>{
      setItemCount(qty);
      test.addItem(item);

}


  
      return (
      
<>



        <div id="container-products" className="product-details d-flex">
            <div className="img-cont">
                <img className="img" src={item.img} alt="Product" />
            </div>
            <div className="details">
            <div className="details__text">
                <h1 className="details__text__title">{item.title}</h1>
                <p className="details__text__desc">{item.desc}</p>
            </div>
            <div className="details__bottom">
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} count={itemCount} onAdd={onAdd} />
                    : <Link to='/cart'><button className="btn btn-danger">Checkout</button></Link>
                }
                <section>
                <p className="details__bottom__price"><i class="fa-regular fa-money-bill-1"></i> Price - <i class="fa-solid fa-dollar-sign"></i> {item.price}</p>
                <p className="details__bottom__stock"><i class="fa-solid fa-boxes-stacked"></i> Stock - {item.stock} units</p>
                </section>
            </div>
            </div>
        </div>
    


</> )}


export default ItemDetail;


