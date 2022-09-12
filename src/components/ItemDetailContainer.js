import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {data} from "./Utils/Data";
import desafio from "./Utils/Promise"
import ItemListContainer from "./ItemListContainer";


const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);
  const {id} = useParams();
//componentDidMount
useEffect(()=> {

  //promise
desafio(data.find(item => item.id == id))
  .then(result => setProducts(result))
  .catch(err => console.log(err))

} , [id])

    return (
<>
<div>{data.id}</div>
<div>{data.name}</div>
<img src={data.image} alt=""></img>
<div>{data.price}</div>






</>)
}


    

export default ItemDetailContainer;
