import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import slugify from 'slugify'
import {LangContext} from '../context/LangContext'

const ProductCard = ({id, photo, title, desc,aztitle,azdesc,date}) => {
  // const [lang,setLang] = useContext(LangContext)
  // return (
  //   <>
  //    {lang=== 'en' ? 
  //         <Card className="section4-img card col-md-4 " style={{backgroundImage:"url()"}}>
  //           <img src={photo} alt="err" />
  //         <Card.Body className="card-body">
  //           <Card.Title className=" mb-5 " ><i>{date}</i></Card.Title>
  //           <h3 className='card-title my-5'><b>{title} {lang === 'en' ? "Communication trends are no longer focused on digital platforms & media " : 'Rabitə meylləri artıq rəqəmsal platformalara və mediaya yönəldilmir'}</b></h3><br />
  //           <LinkContainer to={id}><p className='btn mb-5 text-danger'><b>{lang === 'en' ? "EXPLORE " : 'KEŞFEDİN'} </b> <i className="fa-solid fa-chevron-right"></i></p></LinkContainer>
  //         </Card.Body>
  //       </Card>  :
  //     <Card className="section4-img card col-md-4" style={{backgroundImage:"url()"}}>
  //     <img src={photo} alt="err" />
  //   <Card.Body className="card-body">
  //     <Card.Title className=" mb-5 " ><i>{date}</i></Card.Title>
  //     <h3 className='card-title my-5'><b>{aztitle} {lang === 'en' ? "Communication trends are no longer focused on digital platforms & media " : 'Rabitə meylləri artıq rəqəmsal platformalara və mediaya yönəldilmir'}</b></h3><br />
  //     <LinkContainer to={id}><p className='btn mb-5 text-danger'><b>{lang === 'en' ? "EXPLORE " : 'KEŞFEDİN'} </b> <i className="fa-solid fa-chevron-right"></i></p></LinkContainer>
  //   </Card.Body>
  //   </Card>
          
  //    }
          
    //</>
 // )
}

export default ProductCard