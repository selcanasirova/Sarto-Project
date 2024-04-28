import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';
import { LangContext } from '../../context/LangContext';
import Header from '../../components/Header';
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('Product added to your Card.', {
  style: {
    border: '2px solid #bb1a14',
    padding: '16px',
    color: '#bb1a14',
  },
  iconTheme: {
    primary: '#bb1a14',
    secondary: '#FFFAEE',
  },
});



const Wishlist = () => {
  const [lang,setLang] = useContext(LangContext)
    const { addItem } = useCart();
    const { items,removeWishlistItem}=useWishlist();

  return (
    <>
    <Header />
    <div className="empty" style={{height:"100px"}}></div>
    <div className='container'> 
        <table className="table mb-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> {lang==="en" ? "Photo" : "Şəkil"}</th>
      <th scope="col"> {lang==="en" ? "Product" : "Məhsul"}</th>
      <th scope="col">{lang==="en" ? "Price " : "Qiymət"}</th>
      <th scope="col"> {lang==="en" ? "Add to Card" : "Səbete Əlavə Et"}</th>
      <th scope="col"> {lang==="en" ? "Delete" : "Sil"}</th>
    </tr>
  </thead>
  <tbody>
    
    {items.map((item,count)=>{
          return (
            <tr key={item.id}>
            <th scope="row">{count+1}</th>
            <th scope="row"><img width={200} src={item.img} alt="error" /></th>
            <th scope="row"><Link className='product-name' to={`/shop-sidebar/${slugify(item.name)}`}><h4><b>{item.name}</b></h4></Link></th>
            <th scope="row"><del><h4 >{item.oldprice}</h4> </del>{item.price} $</th>
            <th scope="row"><Button className='py-2' onClick={() => { addItem(item) }} style={{backgroundColor:"transparan"}} variant="ms-2"><b className='text-light' onClick={notify}><i class="fa-solid fa-plus"></i></b></Button></th>
            <th scope="row" ><Button variant='none' onClick={() => removeWishlistItem(item.id)} className=' delete-button'><i className="fa-solid fa-x"></i></Button></th>
            
          </tr>
        )
  

})}
     </tbody>
    </table>
    </div>
    <Toaster position="bottom-right" reverseOrder={true}/>
    </>
  )
}

export default Wishlist