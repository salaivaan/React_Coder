import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount";
import {data} from "./Utils/Data";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />

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

          <button className="vermasinformacion">Ver mas informacion</button> */
          /* {
                      /*  ItemCount === 0
                        ? <ItemCount stock={5} initial={0} addItem={addItem}/>
                        : <Link to='/cart'><button>BUY</button></Link>
                      */}  */
       
       <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
        


    
          

    


      </div>
    </div>
  </div>
</div>

</> )}


export default ItemDetail;


