
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
<div class="card col-md-5 container-fluid ">
  <img src={item.image} class="card-img-top w-50 container-fluid " alt="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title text-md-center">{item.name}</h5>
    <p class="card-text text-md-center">{item.description}</p>
    <p class="card-text text-md-center"><small class="text-muted">Price:{item.price}</small></p>
    <p class="card-text text-md-center"><small class="text-muted">Stock:{item.stock}</small></p>
    <p class="container-fluid d-flex justify-content-around bd-highlight mb-2"><small class="text-muted"><ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} /></small></p>
  </div>
</div>


</> )}


export default ItemDetail;


