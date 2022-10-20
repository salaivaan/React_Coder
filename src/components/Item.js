
import { Link } from "react-router-dom";
import { db, firebaseFetch } from "./Utils/FirebaseConfig";

const Item = ({item}) =>{


    return(
<>

<div className="card col-md-5 container-fluid ">
  <img src={item.image} className="card-img-top w-50 container-fluid " alt="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title text-md-center">{item.name}</h5>
    <p className="card-text text-md-center">{item.description}</p>
    <p className="card-text text-md-center"><small className="text-muted">Price:{item.price}</small></p>
    <p className="card-text text-md-center"><small className="text-muted">Stock:{item.stock}</small></p>

    <Link to={`/item/${item.id}`}> <button type="button" className="btn btn-secondary text-md-center">Mas info</button></Link>
  </div>
</div>


</>

    );
}

export default Item;