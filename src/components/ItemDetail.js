import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount";
import {data} from "./Utils/Data";
import { useState } from "react";
import { Link } from "react-router-dom";



const ItemDetail = (item = {data}) => {

const [itemCount, setItemCount]  = useState(0);

const onAdd = () => {



}


  
    return (
      
<>


<div class="card">
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src= {item.image} class="img-fluid w-100" alt="card-horizontal-image"img/>
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">{item.data}</h5>
        <p class="card-text">{item.name}</p>
        <p class="card-text">{item.price} $<small class="text-muted"></small></p>
        <p class="card-text">
 {
  itemCount === 0
  ? <ItemCount stock={5} initial={1} onAdd={onAdd} />
  : <Link to='/cart' style={{textDecoration: "none"}}><button variant="contained" color="secondary">CheckOut</button></Link>
 
}
         
          <small class="text-muted"></small></p>
          

    


      </div>
    </div>
  </div>
</div>

</> )
}

export default ItemDetail;