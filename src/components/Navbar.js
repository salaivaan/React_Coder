import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar  = () => {

    return (
        <>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
    
  <div className="container-fluid">
  <Link to={"/"}>
    <a className="navbar-brand" href="#">Nene Basics</a>
  </Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarDark">
    
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
      <Link to={"category/4"}>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Abrigos</a>
        </li>
      </Link>
      <Link to={"category/2"}>
        <li className="nav-item">
          <a className="nav-link " href="#">Pantalones</a>
        </li>
        </Link>
        <Link to={"category/3"}>
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Remeras</a>
        </li>
        </Link>
        <Link to={"category/1"}>
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Accesorios</a>
        </li>
        </Link>
        <Link to={"/Cart"}>
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true"><CartWidget /></a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>
        
        
        </>
    )
}

export default NavBar;