import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount";
import {data} from "./Utils/Data";


const itemDetail = (props) => {



    return(

<div class="card">
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src= {data[2].image} class="img-fluid w-100" alt="card-horizontal-image"img/>
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">{data[2].id}</h5>
        <p class="card-text">{data[2].name}</p>
        <p class="card-text">{data[2].price} $<small class="text-muted"></small></p>
        <p class="card-text"><small class="text-muted"><ItemCount stock ={5} initial= {1}/></small></p>
      </div>
    </div>
  </div>
</div>

    )
}

export default itemDetail;