
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


<div class="card">
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src= {item.image} class="img-fluid w-25" alt="card-horizontal-image"img/>
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.stock} </p>
        <p class="card-text">{item.price} $<small class="text-muted"></small></p>
        <p class="card-text"><ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/> $<small class="text-muted"></small>
        </p>


        


    
          

    


      </div>
    </div>
  </div>
</div>

</> )}


export default ItemDetail;


