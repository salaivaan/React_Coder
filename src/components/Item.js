
import { Link } from "react-router-dom";
import { db, firebaseFetch } from "./Utils/FirebaseConfig";

const Item = ({item}) =>{


    return(
<>

<div class="card">
  <img src={item.image} class="card-img-top w-25" alt="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.description}</p>
    <p class="card-text"><small class="text-muted">{item.price}</small></p>
    <p class="card-text"><small class="text-muted">{item.stock}</small></p>
    <Link to={`/item/${item.id}`}><button className="vermasinformacion">Ver mas informacion</button></Link>
  </div>
</div>


</>

    );
}

export default Item;