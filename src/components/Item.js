
import { Link } from "react-router-dom";
import { db, firebaseFetch } from "./Utils/FirebaseConfig";

const Item = ({item}) =>{


    return(
<>

<div class="card col-md-5 container-fluid ">
  <img src={item.image} class="card-img-top w-50 container-fluid " alt="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title text-md-center">{item.name}</h5>
    <p class="card-text text-md-center">{item.description}</p>
    <p class="card-text text-md-center"><small class="text-muted">Price:{item.price}</small></p>
    <p class="card-text text-md-center"><small class="text-muted">Stock:{item.stock}</small></p>

    <Link to={`/item/${item.id}`}> <button type="button" class="btn btn-secondary text-md-center">Mas info</button></Link>
  </div>
</div>


</>

    );
}

export default Item;