
import './App.css';
import NavBar from './components/Navbar' ;
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
<>
<NavBar/>
<h1>Bienvenido a Nene</h1>
<hr></hr>

<ItemListContainer producto="remeras" descripcion="blanca de algodon" precio="500"/>
<ItemListContainer producto="Jean" descripcion="Clasicc" precio="2500"/>
<ItemListContainer producto="Campera" descripcion="Cuero sintetico" precio="5000"/>

</>
  )  
  
};

export default App;
