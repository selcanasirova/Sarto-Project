import React, {  useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import slugify from 'slugify'
import { ProductContext } from '../../../context/ProductContext'
import { Button, Container } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { LangContext } from '../../../context/LangContext'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../../components/Header'

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



const SidebarDetails = () => {
    const { addItem } = useCart()
    const {name}=useParams()
    const [product]=useContext(ProductContext)
    const detailsData= product.find(p=> slugify(p.name) === name)
    const [lang,setLang] = useContext(LangContext)

    const addtoCart= () =>{
      addItem(detailsData);
      notify();
    }
  return (
    <>
          <Container>
          
          {detailsData===undefined ? <h1> {lang==="en" ? "Loading" : "Yüklənir"}</h1> : <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{detailsData.name}</h1>
                  <h4 className='text-danger'><del>{detailsData.oldprice} </del></h4>
                  <h3>{detailsData.price} $</h3>
                  <h3 className="lead my-5"><b>{detailsData.desc}</b></h3>
                      <Button className='addCart mt-3 me-4' onClick={addtoCart} variant="ms-2"><b>{lang==="en" ? "Add to Cart" : "Karta Əlavə Et"} </b></Button>
                      <Link to={"/shop-sidebar"}><Button className='addCart mt-3' variant="ms-2"><b>{lang==="en" ? "Back to Shop" : "Məhsullara Qayıt"} </b></Button></Link>
              </div>
              
              <div className="col-10 col-sm-8 col-lg-6">
                  <img src={detailsData.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={300} loading="lazy" />
              </div>

          </div>}
          <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button btn text-center" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            <h2>{lang==='en' ? 'REVIEWS' : 'ŞƏRHLƏR'}</h2>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <h4>{detailsData.review_name}:</h4>
              <p>{detailsData.review_content}</p> 
            </div>
          </div>
        </div>
          
          <Toaster position="bottom-right" reverseOrder={true}/>
          </Container>

    </>
  )
}

export default SidebarDetails