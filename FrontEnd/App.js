import './App.css';
import Home from './Pages/home';
import Header from './Components/header';
import Foot from './Components/Foot';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './Pages/Cart';
function App() {
  let [cartItems,setCartIems]=useState([])
  console.log(cartItems.length)
  return (
    <div className="App">
      <ToastContainer theme='dark' position='top-center'/>
      
      <BrowserRouter>
      <div>
      <Header cartItems={cartItems}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartIems={setCartIems}/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartIems={setCartIems} />}/>
        </Routes>
        </div>
      </BrowserRouter>
      
      <Foot/>
    </div>
  );
}

export default App;
