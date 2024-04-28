import React, { useContext } from 'react'
import '../sass/Footer.scss'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext'

const Footer= () => {
  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='py-3'>
  <footer className="py-3 my-4 ">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 my-5">
      <div className='footer-part m-5'>
        {/* <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/logo-footer.png" alt="error" className='mb-3'/> */}
        <div className="footer-logo mb-3"></div>
        <li className="nav-item"><h6 className="px-2 ">{lang==="en"? "Your software company stands out with " : "Proqram təminatı şirkətiniz müştərilərin biznes"} <br />{lang==="en"? " its vision to be a technology partner, focusing" : "proseslərinin optimallaşdırılması üçün innovativ"} <br />{lang==="en"? "on innovative solutions and an expert team to " : "həllər və ekspert komandaya diqqət yetirərək"}  <br />{lang==="en"? "optimize clients' business processes." : "texnologiya tərəfdaşı olmaq vizyonu ilə seçilir."}</h6></li>
        <li className="nav-item">
          <p className="nav-link px-2 ">12, West Streeet, 11000 New York, NY <br /></p>
          <p className="nav-link px-2 " style={{textDecoration:"none"}}>(+381) 11.123.4567</p></li>
        <li className="nav-item"><Link to={"/"} className="nav-link px-2 ">sarto@qodeinteractive.com</Link></li>
      </div>
      <div className='footer-part m-5'>
        <li className="nav-item"><h4><b>{lang==="en"? "Links " : "Linklər"}</b></h4></li>
        <li className="nav-item"><Link to={"/about-us"} className="nav-link px-2 "><i>{lang==="en"? "Our Story" : "Bizim hekayəmiz"} </i></Link></li>
        <li className="nav-item"><Link to={"/our-studio"} className="nav-link px-2 "><i>{lang==="en"? "Wiew our" : "Bizə Baxın"} </i></Link></li>
        <li className="nav-item"><Link to={"/shop-sidebar"} className="nav-link px-2 "><i>{lang==="en"? " Go to shop" : "Alışveriş"}</i></Link></li>
        <li className="nav-item"><Link to={"/faq"} className="nav-link px-2 "><i>{lang==="en"? "See FAQ" : "FAQ"}  </i></Link></li>
      </div>
      <div className='footer-part m-5 '>
        <li className="nav-item"><h4><b> {lang==="en"? "Facebook Feed" : "Facebook Lenti"}</b></h4></li>
        <li className="nav-item"><a href='https://www.facebook.com/QodeInteractive/' className="nav-link px-2 ">{lang==="en"? "Connect with Facebook" : "Facebook ilə əlaqə saxlayın"} </a></li>
      </div>
      <div className='footer-part m-5'>
        <li className="nav-item"><h4><b>Offices</b></h4></li>
        <li className="nav-item"><Link className="nav-link px-2 "><b>{lang==="en"? " With a customer-centric approach and a commitment to" : "Müştəri mərkəzli yanaşma və"} <br /> {lang==="en"? "quality service, it enhances the success " : "keyfiyyətli xidmət öhdəliyi ilə o, rəqəmsal"} <br />{lang==="en"? " of businesses by contributing to their" : "transformasiya səyahətinə töhfə verməklə"}  <br />{lang==="en"? "digital transformation journey." : "müəssisələrin uğurunu artırır."} </b></Link></li>
        <li className="nav-item"><Link className="nav-link px-2 "><img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/footer-mapa.png" alt="error" /></Link></li>
      </div>
    </ul>
    <p className="text-center "><i> {lang==="en"? "© 2023 Qode Interactive, All Rights Reserved" : "© 2023 Qode Interactive, Bütün hüquqlar qorunur"}</i></p>
  </footer>
    </div>
  )
}

export default Footer