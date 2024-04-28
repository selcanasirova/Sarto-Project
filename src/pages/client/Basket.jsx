import React, { useContext, useState } from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import slugify from 'slugify'
import { LangContext } from '../../context/LangContext'
import Header from '../../components/Header'

const Basket = () => {
  const {isEmpty,items,updateItemQuantity,removeItem,emptyCart,cartTotal } = useCart()
  const [lang,setLang] = useContext(LangContext)

  return ( isEmpty ? 
  <>
  <Header />
    <div className="cart-main">
      <p className=' ms-5'><b> {lang==="en" ? "Card" : "Səbət"}</b></p>
    </div>
    <h2 className='text-center my-5'><b>{lang==="en" ? "Your cart is currently empty. " : "Sənin səbətin boşdur"}</b></h2>
    <div className='backToShop'>
      <Link to={"/shop-sidebar"} ><Button className='mt-3' variant="ms-2"><b>{lang==="en" ? "Return to Shop " : "Məhsullara qayıt"}</b></Button></Link>
    </div>
    </> :
    <>
    <Header />
    <div className="cart-main">
      <p className=' ms-5'><b>{lang==="en" ? "Card " : "Səbət"}</b></p>
    </div>
    <Container>
    <table className="table my-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> {lang==="en" ? "Photo" : "Şəkil"}</th>
      <th scope="col"> {lang==="en" ? "Product" : "Məhsul"}</th>
      <th scope="col">{lang==="en" ? "Price " : "Qiymət"}</th>
      <th scope="col"> {lang==="en" ? "Quantity" : "Say"}</th>
      <th scope="col"> {lang==="en" ? "Subtotal" : "Yekun"}</th>
      <th scope="col"> {lang==="en" ? "Delete" : "Sil"}</th>
    </tr>
  </thead>
  <tbody>
    
    {items.map((items,count)=>(
    <tr>
      <th scope="row">{count+1}</th>
      <th scope="row"><img width={200} src={items.img} alt="error" /></th>
      <th scope="row"><Link className='product-name' to={`/shop-sidebar/${slugify(items.name)}`}><h4><b>{items.name}</b></h4></Link></th>
      <th scope="row"><del><h4 >{items.oldprice}</h4> </del>{items.price} $</th>
      <th scope="row"><div className="quantity d-flex align-items-center">
        <p className='mt-3'>{items.quantity}</p>
        <div className="quantity-main">
          <Button className='quantity-button' onClick={()=>{updateItemQuantity(items.id, items.quantity + 1)}}><i className="fa-solid fa-chevron-up"></i></Button>
          <Button className='quantity-button' onClick={()=>{updateItemQuantity(items.id, items.quantity - 1)}}><i className="fa-solid fa-chevron-down"></i></Button>
        </div>
        
        </div>
      </th>
      <th scope="row"><h4 >{items.price * items.quantity} $</h4></th>
      <th scope="row" onClick={()=>{removeItem(items.id)}}><Button variant='none' className=' delete-button'><i className="fa-solid fa-x"></i></Button></th>
      
    </tr>
  

    ))}
     </tbody>
    </table>
    <h2> {lang==="en " ? "Total Price:" : "Yekun Qiymət:"}{cartTotal}$</h2>
    <div className="finish-payment">
      <Button className='emptyCart my-5' variant=' emptyCart my-5 none' onClick={()=>{emptyCart()}}><b> {lang==="en" ? "Clear Cart" : "Səbəti Təmizlə"}</b></Button>
      <Link to={"/checkout"}><Button className='emptyCart my-5' variant=' emptyCart my-5 none'><b>  {lang==="en" ? "Proceed to checkout" : "Ödə"}</b></Button></Link>
    </div>
    
    
    </Container>

    </>
  )
}

export default Basket


