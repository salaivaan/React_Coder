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
<>

<div>{data[2].id}</div>
<div>{data[2].name}</div>
<img src={data[2].image} alt=""></img>
{data[2].price}



)


</>
    )

}
export default ItemListContainer;

