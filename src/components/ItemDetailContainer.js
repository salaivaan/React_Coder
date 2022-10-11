import { useEffect } from "react";
import { useState } from "react";
import { useParams} from "react-router-dom";
import ItemDetail from "./ItemListContainer";
import { firebaseDos } from "./Utils/FirebaseConfig"
import { db, fsFetchDetail } from "./Utils/FirebaseConfig";


const ItemDetailContainer = () => {

  const [products , setProducts] = useState([]);
  const {id} = useParams();
//componentDidMount
useEffect(()=> 
{
  fsFetchDetail(id)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
},[id]);

console.log(products)







    return (
<>

<ItemDetail item={products}/>








</>)
}


    

export default ItemDetailContainer;
