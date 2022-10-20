
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContex  } from "./CartContext";






const ItemDetail = ({item}) => {

  const [itemCount, setItemCount] = useState(0)
  const test = useContext(CartContex);
  
  const onAdd = (qty)=>{
      setItemCount(qty);
      test.addItem(item);

}


  
      return (
      
<>
<div className="card col-md-5 container-fluid ">
  <img src={item.image} className="card-img-top w-50 container-fluid " alt="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title text-md-center">{item.name}</h5>
    <p className="card-text text-md-center">{item.description}</p>
    <p className="card-text text-md-center"><small className="text-muted">Price:{item.price}</small></p>
    <p className="card-text text-md-center"><small className="text-muted">Stock:{item.stock}</small></p>
    <p className="container-fluid d-flex justify-content-around bd-highlight mb-2"><small className="text-muted"><ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} /></small></p>
  </div>
</div>


</> )}


export default ItemDetail;


