import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar  = () => {

    return (
        <>
        <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
    
  <div class="container-fluid">
  <Link to={"/"}>
    <a class="navbar-brand" href="#">Nene Basics</a>
  </Link>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarDark">
    
      <ul class="navbar-nav me-auto mb-2 mb-xl-0">
      <Link to={"category/3"}>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Abrigos</a>
        </li>
      </Link>
      <Link to={"/category/4"}>
        <li class="nav-item">
          <a class="nav-link" href="#">Pantalones</a>
        </li>
        </Link>
        <Link to={"/category/1"}>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Remeras</a>
        </li>
        </Link>
        <Link to={"/category/2"}>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Accesorios</a>
        </li>
        </Link>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><CartWidget /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        </>
    )
}

export default NavBar;