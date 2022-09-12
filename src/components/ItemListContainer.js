import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {data} from "./Utils/Data";
import desafio from "./Utils/Promise"
import { Link } from 'react-router-dom';


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const {id} = useParams();
//componentDidMount
useEffect(()=> {

  if(id){
  //promise
desafio(data.filter(item => item.categoryId == id))
  .then(result => setProducts(result))
  .catch(err => console.log(err))
  } else 

  {desafio(data)
    .then(result => setProducts(result))
    .catch(err => console.log(err))
  }

} , [id])

    return (
<>

{ 
products.map(item => (<>

<div>{item.id}</div>
<div>{item.name}</div>
<img src={item.image} alt=""></img>
<div>{item.price} </div>

<Link to={"/item/$id{item} "}><button>Detalles</button></Link>



</>

)
)
} 


</>
    )

}
export default ItemListContainer;

