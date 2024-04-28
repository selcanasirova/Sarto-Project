import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../context/ProductContext'
import SingleCard from '../../../components/SingleCard'
import { LangContext } from '../../../context/LangContext'
import Header from '../../../components/Header'

const Payment = () => {
    const [product] = useContext(ProductContext)
    const [index, setindex] = useState(0);
    const [lang,setLang] = useContext(LangContext)
    const n = 3;
    const nextSlide = () => {
        const newIndex = index + n;
            if (newIndex < product.length) {
                setindex(newIndex);
            }else {
                setindex(0)
            }
      };
  return (
    <>
    <Header />
    <div className="empty" style={{height:"100px"}}></div>
    <div className="recommend-page">
        <div>
          <h1 className='my-5'>{lang==="en" ? "Payment is successful!" : "Ödəniş uğurludur"} </h1>
        </div>
        <div className="recommend-product" >
            <p className='text-center '><b> {lang==="en" ? "Recommend product:" : "Önərilən məhsullar:"}</b></p>
          <div className="row">
            {product.slice(index, index + n).map(item => (
              <SingleCard key={item.id} alldata={item} />
            ))}
          </div>
        </div>
        <div className="recommend-button">
          <button className="my-3 mb-5" onClick={nextSlide}>{lang==="en" ? "More" : "Daha"}</button>
        </div>
        

    </div>
    </>
  )
}

export default Payment