
import ItemCount from "./ItemCount";
import { db, firebaseFetch } from "./Utils/FirebaseConfig";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContex  } from "./CartContext";
import Item from "./Item";




const ItemDetail = ({products}) => {

  const [itemCount, setItemCount] = useState(0)
  const test = useContext(CartContex);
  
  const onAdd = (qty)=>{
      setItemCount(qty);
      test.addItem(products);

}


  
      return (
      
<>


<div class="card">
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src= {products.image} class="img-fluid w-25" alt="card-horizontal-image"img/>
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">{products.name}</h5>
        <p class="card-text">{products.stock} </p>
        <p class="card-text">{products.price} $<small class="text-muted"></small></p>
        <p class="card-text"><ItemCount stock={products.stock} initial={itemCount} onAdd={onAdd}/> $<small class="text-muted"></small>
        </p>


        


    
          

    


      </div>
    </div>
  </div>
</div>

</> )}


export default ItemDetail;


