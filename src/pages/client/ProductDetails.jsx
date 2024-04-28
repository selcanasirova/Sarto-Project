import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { NavLink } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { LangContext } from '../../context/LangContext'
import Header from '../../components/Header'

const ProductDetails = () => {
    const {url} = useParams()
    const productdata = useSelector(state=>state)
    console.log(productdata);
    const productdetails= productdata.find(p=>p.id.toString()===url)
    const {totalItems}=useCart()
    const [lang,setLang] = useContext(LangContext)
    return (
     <>
     <Header />
      { lang==="en" ? <>
      <div className="aboutus-section1">
        <div className="aboutus-section1-img">
          <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/port-single-titlle-img-2.jpg" alt="error"  className='img-fluid '/>
        </div>
        <div className="aboutus-section1-main">
          <b className='px-5 mt-5'>{productdetails.title}</b>
        </div>
      </div>
        <div>
            <div className="container col-xxl-10 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={productdetails.photo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetails.title}</h1>
                        <p>{productdetails.desc}</p>
                        
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-5">
                  <button type="button" className="btn btn-lg px-4">Back to Home</button>
                </div>
            </div>
        </div>
        </> :
        <>
      <div className="aboutus-section1">
        <div className="aboutus-section1-img">
          <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/port-single-titlle-img-2.jpg" alt="error"  className='img-fluid '/>
        </div>
        <div className="aboutus-section1-main">
          <b className='px-5 mt-5'>{productdetails.aztitle}</b>
        </div>
      </div>
        <div>
            <div className="container col-xxl-10 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={productdetails.photo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetails.aztitle}</h1>
                        <p>{productdetails.azdesc}</p>
                        
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-5">
                  <Link to={"/"}><button type="button" className="btn btn-lg px-4"> {lang==="en" ?"Back to Home" : "Ev" } </button></Link>
                  
                </div>
            </div>
        </div>
        </>
      }
     </>
        
    )
}

export default ProductDetails