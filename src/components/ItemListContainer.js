import { useEffect } from "react";
import { useState } from "react";
import {data} from "./Utils/Data";
import desafio from "./Utils/Promise"

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

//componentDidMount
useEffect(()=> {

  //promise
desafio(data)
  .then(result => setProducts(result))
  .catch(err => console.log(err))

} , [])

    return (
<>{ 
products.map(item => (<>
<div>{item.id}</div>
<div>{item.name}</div>
<img src={item.image} alt=""></img>
{item.price}



</>))
}

</>
    )

}
export default ItemListContainer;

