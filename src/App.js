
import './App.css';
import NavBar from './components/Navbar' ;
import ItemDetail from './components/ItemDetail';
import { data } from './components/Utils/Data';


function App() {
  return (
<>
<NavBar/>
<h1>Bienvenido a Nene</h1>
<hr></hr>


<ItemDetail item={data}/>

</>
  )  
  
};

export default App;
