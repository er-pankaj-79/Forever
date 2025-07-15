import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contect from './pages/Contect'
import About from './pages/About'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Collection from './pages/Collection'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App