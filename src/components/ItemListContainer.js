import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { firebaseFetch } from "./Utils/FirebaseConfig";
import Item from "./Item";


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
      
    firebaseFetch(id)
      .then(result => setProducts(result))

  },[id])

    return (
<>




{
  products.map(item =>(
          <Item
          item={item}
          />
      
        )) 
      }   









</>
    ) 

    }
export default ItemListContainer;

