
import './App.css';
import NavBar from './components/Navbar' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContexProvider from './components/CartContext';


function App() {
  return (
<>
<CartContexProvider>
<BrowserRouter>
<NavBar/>
<h1>Bienvenido a Nene</h1>

<hr></hr>
<Routes>
  <Route  path='/' element={<ItemListContainer/>}/>
  
  <Route path="/category/:id" element={<ItemListContainer/>}/>

  <Route path='/item/:id' element={<ItemDetailContainer/>} />
  
  <Route path='/Cart' element={<Cart/>}/>
  
  </Routes>



</BrowserRouter>
</CartContexProvider>
</>
  )  
  
};

export default App;
