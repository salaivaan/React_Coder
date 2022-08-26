import CartWidget from './CartWidget';


const ItemListContainer = (props) => {


    return (
<>
        <div class="card">
  <div class="row g-0">
    <div class="col-5 col-sm-4">
      <img src="assets/images/bs-images/img-3x4.png" class="img-fluid w-100" alt="card-horizontal-image"></img>
    </div>
    <div class="col-7 col-sm-8">
      <div class="card-body">
        <h5 class="card-title">Producto:{props.producto} <CartWidget/></h5>
        <p class="card-text">Descripcion {props.descripcion}</p>
        <p class="card-text"><small class="text-muted">Precio {props.precio}</small></p>
      </div>
    </div>
  </div>
</div>
</>
    )

}
export default ItemListContainer;