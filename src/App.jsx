import React, { useContext } from 'react'
import Home from './pages/client/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/client/page/AboutUs'
import Footer from './components/Footer'
import Sidebar from './pages/client/shop/Sidebar'
import {ProductProvider} from './context/ProductContext'
import SidebarDetails from './pages/client/shop/SidebarDetails'
import { CartProvider } from 'react-use-cart'
import Basket from './pages/client/Basket'
import Ourstudio from './pages/client/page/Ourstudio'
import WhatWeDo from './pages/client/page/WhatWeDO'
import FAQ from './pages/client/page/FAQ'
import ProductDetails from './pages/client/ProductDetails'
import Dashboard from './pages/admin/Dashboard'
import AddProduct from './pages/admin/update/AddProduct'
import EditProduct from './pages/admin/update/EditProduct'
import Login from './pages/client/Login'
import Register from './pages/client/Register'
import Wishlist from './pages/client/Wishlist'
import { WishlistProvider } from 'react-use-wishlist'
import Checkout from './pages/client/page/Checkout'
import Payment from './pages/client/page/Payment'
import "../src/sass/style.scss"
import { ModeContext, ModeProvider } from './context/ModeContext'
import { LangProvider } from './context/LangContext'
import Header from './components/Header'
import NotFound from './pages/client/page/NotFound'

const Main =()=>{
  const [mode]=useContext(ModeContext)
  return (
    <div className={mode}>
    <WishlistProvider> 
    <CartProvider>
    <ProductProvider>
    {/* <Header /> */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product/:url' element={<ProductDetails/>}></Route>
      <Route path='/:url' element={<ProductDetails/>}></Route>
      <Route path='/about-us' element={<AboutUs />}></Route>
      <Route path='/shop-sidebar' element={<Sidebar />}></Route>
      <Route path='/basket' element={<Basket />}></Route>
      <Route path='/shop-sidebar/:name' element={<SidebarDetails />}></Route>
      <Route path='/our-studio' element={<Ourstudio />}></Route>
      <Route path='/what-we-do' element={<WhatWeDo/>}></Route>
      <Route path='/faq' element={<FAQ />}></Route>
      <Route path='/admin' element={<Dashboard />}></Route>
      <Route path='/admin/add' element={<AddProduct />}></Route>
      <Route path='admin/edit/:ne' element={<EditProduct />}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      {/* <Route path='/*' element={<NotFound/>}></Route> */}
    </Routes>
    <Footer />
    </ProductProvider>
    </CartProvider>
    </WishlistProvider>
    </div>
  )
}

const App = () => {
  
  return (
    
    <BrowserRouter>
    <LangProvider>
      <ModeProvider>
      <Main />
    </ModeProvider>
    </LangProvider>
    

    </BrowserRouter>
  )
}

export default App
