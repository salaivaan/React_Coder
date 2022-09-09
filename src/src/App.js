
import './App.css';
import NavBar from './components/Navbar' ;
import ItemDetail from './components/ItemDetail';
import { data } from './components/Utils/Data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
<>
<BrowserRouter>
<NavBar/>
<h1>Bienvenido a Nene</h1>
<hr></hr>
<Routes>
  <Route  path='/' element={<ItemListContainer/>}/>
  
  <Route path="/category/:id" element={<ItemListContainer/>}/>

  <Route path='/item/:id' element={<ItemDetail/>} />
  
  </Routes>



</BrowserRouter>
</>
  )  
  
};

export default App;
