import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {data} from "./Utils/Data";
import desafio from "./Utils/Promise"
import ItemDetail from "./ItemListContainer";
import ItemCount from "./ItemCount";


const ItemDetailContainer = () => {

  const [item , setProducts] = useState([]);
  const {id} = useParams();
//componentDidMount
useEffect(()=> {

  //promise
desafio(data.find(item => item.id == id))
  .then(result => setProducts(result))
  .catch(err => console.log(err))
  
  

} , [id]);

useEffect(()=> {

  if(id){
  //promise
desafio(data.filter(item => item.id == id))
  .then(result => setProducts(result))
  .catch(err => console.log(err))
  } else 

  {desafio(data)
    .then(result => setProducts(result))
    .catch(err => console.log(err))
  }
} , [id]);

    return (
<>

<ItemDetail item={data}/>
<ItemCount stock ={5} initial= {1} />






</>)
}


    

export default ItemDetailContainer;
