import React from 'react'
import {Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='w-full h-full flex flex-col'>

      <Navbar />

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/product' element={<Product />} />

      </Routes>      
    </div>
  )
}

export default App