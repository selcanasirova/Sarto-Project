import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../context/ProductContext'
import { Link, NavLink } from 'react-router-dom'
import slugify from 'slugify'
import SingleCard from '../../../components/SingleCard'
// import { Container } from 'react-bootstrap'
import { useCart } from 'react-use-cart'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LangContext } from '../../../context/LangContext'
import Header from '../../../components/Header'


const Sidebar = () => {

  const [show, setShow] = useState(false);
  const [lang,setLang] = useContext(LangContext)
  const [product] = useContext(ProductContext)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sortedProductsAscending = [...product].sort((a, b) => a.price - b.price);
  const [sortState, setSortState] = useState(false);


  const searchSubmited = (e) => {
    e.preventDefault();
    setCatData(query);
  }

  

  const [query, setQuery] = useState('')
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);


  const filterPrice = () => {
    const result = product.filter((pd) => pd.price >= minPrice && pd.price <= maxPrice);
    setCatData(result);
  };


  const [catData, setCatData] = useState(product)
  
  const filterCategory = (catItem) => {
    const result = product.filter(cd => (
      cd.category === catItem
    ))
    setCatData(result)
  }


  const { totalItems } = useCart()
  return (
    <>
    <Header />

      <div className="aboutus-section1">
    <div className="empty" style={{height:"60px"}}></div>
        <div className="aboutus-section1-img">
          <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/Blog-List-New-Img.jpg" alt="error"  className='img-fluid '/>
        </div>
        <div className="aboutus-section1-main">
          <b className='px-5 mt-5'> {lang==="en"?"SHOP.":"Məhsullar"}</b>
        </div>
      </div>


      <h1 className='ms-5 mt-5'>  {lang==="en"?"Products :":"Məhsullar :"}</h1>
      <div className="sidebar-section2 my-5 container">
      
      
        <div className="sidebar-section2-part2 mb-5">

          <div className="search">

            <h3><b>Search</b></h3>
            <div>
              <Button variant="primary" onClick={handleShow}><i class="fa-solid fa-magnifying-glass"></i></Button>

              <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className='text-danger'> {lang==="en"?"Search Product":"Məhsul Axtar"}</Modal.Title>
                </Modal.Header>
                <form className="d-flex" onSubmit={searchSubmited}>
                  <div className="input-group mb-3">
                    <input onChange={e => setQuery(e.target.value)} className="form-control mx-3 mt-3 border-2 border-danger" type="search" placeholder="Search" />
                  </div>
                </form>

                <ul className='list-group'>
                  {query === '' ? '' : product.filter(value => value.name.toLocaleLowerCase().includes(query)).map(item => (
                    <Link to={`/shop-sidebar/${slugify(item.name)}`} className='list-group-item' key={item.id} >{item.name}</Link>
                  ))}
                </ul>
              </Modal>
            </div>

          </div>
          <div className="filterPrice my-4">
            <h3>
              <b>{lang === 'en' ? 'Price ' : 'Qiymət Aralığı'}</b>
            </h3>
            <button
            className="btn btn-warning text-white my-3"
            onClick={(e) => {
              if (sortState == false) {
                setSortState(true);
                {lang==="en"?e.currentTarget.innerHTML = "From high to low":e.currentTarget.innerHTML = "Çoxdan aza sırala"}
                setCatData(
                  product.sort((a,b)=> a.price - b.price)
                )
              }else{
                setSortState(false)
                {lang==="en"?e.currentTarget.innerHTML = "From low to high":e.currentTarget.innerHTML = "Azdan çoxa sırala"}
                setCatData(
                  product.sort((a,b)=> b.price - a.price)
                )
              }
            }}
          >
           {lang==="en"?"From low to high" : "Azdan çoxa sırala"}
          </button>
            <div>
              <label htmlFor="minPrice" className="form-label">
                {lang === 'en' ? 'Min Price' : 'Minimum Qiymət'}
              </label>
              <input
                type="number"
                id="minPrice"
                className="form-control"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />

              <label htmlFor="maxPrice" className="form-label mt-2">
                {lang === 'en' ? 'Max Price' : 'Maksimum Qiymət'}
              </label>
              <input
                type="number"
                id="maxPrice"
                className="form-control"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />

              <Button variant="primary" className="mt-2" onClick={filterPrice}>
                {lang === 'en' ? 'Apply' : 'Tətbiq et'}
              </Button>
            </div>
          </div>
          <div className="filterCategory my-4">
            <h3><b>{lang==="en"? "Category " : "Katagoriya"}</b></h3>
            <ul >
              <li className='py-3' onClick={() => { filterCategory("bag") }}> {lang==="en"?"Bag":"Çanta"}</li>
              <li className='py-3' onClick={() => { filterCategory("elixir") }}> {lang==="en"?"Elixir":"İksir"}</li>
              <li className='py-3' onClick={() => { filterCategory("t-shirt") }}> {lang==="en"?"T-Shirt":"Köynək"}</li>
              <li className='py-3' onClick={() => { filterCategory("frame") }}> {lang==="en"?"Frame":"Çərçivə"}</li>
              <li className='py-3' onClick={() => { filterCategory("phone") }}> {lang==="en"?"Phone":"Telefon"}</li>
            </ul>
            <h3>
              <b>{lang === 'en' ? 'Sort the price by category ' : 'Kataqoriyaya görə qiymıti sırala'}</b>
            </h3>
            <button
            className="btn text-white mt-3"
            onClick={(e) => {
              if (sortState == false) {
                setSortState(true);
                {lang==="en"?e.currentTarget.innerHTML = "From high to low":e.currentTarget.innerHTML = "Çoxdan aza sırala"}
                setCatData(
                  catData.sort((a,b)=> a.price - b.price)
                )
              }else{
                setSortState(false)
                {lang==="en"?e.currentTarget.innerHTML = "From low to high":e.currentTarget.innerHTML = "Azdan çoxa sırala"}
                setCatData(
                  catData.sort((a,b)=> b.price - a.price)
                )
              }
            }}
          >
           {lang==="en"?"From low to high" : "Azdan çoxa sırala"}
          </button>
          </div>
        </div>
        <div className="sidebar-section2-part1 row g-5">

      {product.length === 0 ? <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif' alt='err' /> : catData.length === 0 ?
            product.map(item => (
              <SingleCard key={item.id} alldata={item} />
            )) : catData.map(item => (
              <SingleCard key={item.id} alldata={item} />
            ))}
        </div>
        

      </div>

    </>
  )
}

export default Sidebar