import React, { useContext } from 'react'
import { useCart } from 'react-use-cart'
import { NavLink,Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { LangContext } from '../../../context/LangContext'
import Header from '../../../components/Header'

const Ourstudio = () => {
    const {totalItems}=useCart()
    const [lang,setLang] = useContext(LangContext)
  return (
    <>
    <Header />
    <div className="aboutus-section1">
        <div className="aboutus-section1-img">
          <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/about-us-img.jpg" alt="error"  className='img-fluid'/>
        </div>
        <div className="aboutus-section1-main">
          <b className='px-5'>{lang==="en" ? " Our Studio. " : " Bizim Studiyamız"} </b>
          <i className='px-5'> {lang=="en" ? "New York City, 5 Days, 32 Speakers, 13 workshops" : "New York City, 5 Gün, 32 Spiker, 13 seminar"}  <br />{lang=="en" ? "Sign up now and secure your arrival" : "İndi qeydiyyatdan keçin və gəlişinizi təmin edin"}</i>
        </div>
      </div>
    <div className="ourstudio-section2">
    <div className="row">
          <Card className="section2-card1 card col-md-4 col-sm-12" >
            <Card.Body className="card-body ">
              <Card.Text className="card-title"><b>{lang === 'en' ? "Leading Solutions in Digital Transformation" : 'Rəqəmsal Transformasiyada Aparıcı Həllər'}</b></Card.Text>
            </Card.Body>
          </Card>
          <Card className="section2-card2 card col-md-4" >
            <Card.Title className="card-body">
              <Card.Title className="card-title"><h1><b> {lang === 'en' ? "Digital." : 'Rəqəmsal.'}</b></h1></Card.Title>
              <Card.Text className="card-text my-5">{lang === 'en' ? "Digital marketing channels are Internet-based systems that create and accelerate product value." : 'Rəqəmsal marketinq kanalları məhsul dəyərini yarada və sürətləndirə internətə əsaslanan sistemlərdir .'}</Card.Text>
              <Card.Link href="#" className="text-danger"><b>{lang === 'en' ? "EXPLORE " : 'KEŞFEDİN'}<i className="fa-solid fa-chevron-right"></i></b></Card.Link>
            </Card.Title>
          </Card>
          <Card className="section2-card3 card col-md-4 " >
            <Card.Title className="card-body">

              <Card.Title className="card-title"><h1><b>{lang === 'en' ? "Creative." : 'Yaradıcı.'}</b></h1></Card.Title>
              <Card.Text className="card-text my-5">{lang === 'en' ? "The world is a source of information for a creative person - he absorbs the information he needs to increase his creativity." : 'Dünya yaradıcı bir insan üçün məlumat mənbəyidir – öz yaradıcılığını artırmaq üçün ona lazım olan məlumatları mənimsəyir. '}</Card.Text>
              <Card.Link href="#" className="text-danger"><b>{lang === 'en' ? "EXPLORE " : 'KEŞFEDİN'}<i className="fa-solid fa-chevron-right"></i></b></Card.Link>
            </Card.Title>
          </Card>
        </div>
  </div>


 
<div className="ourstudio-section3">
        <div className="row">
          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-1.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>{lang === 'en' ? "Martha Ferguson " : 'Martha Ferguson'}</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Web developer " : 'Veb tərtibatçısı'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-2.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>Samantha Stephens</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Project manager " : 'Layihə meneceri'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-3.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>Hannah Spencer</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Office manager " : 'Ofis meneceri'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>


          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-4.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>Evelyn Guerrero</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Executive manager " : 'İcraçı menecer'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>


          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-5.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>Richard Salazar</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Web developer " : 'Veb tərtibatçısı'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-6.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>Patricia Lawrence</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Web designer " : 'Veb dizayneri'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>


          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-7.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>Ashley Castillo</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Web developer " : 'Veb tərtibatçısı'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>


          <Card className="card col-md-3 col-sm-12" >
            <Card.Img src="	https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Team-img-11.jpg" className="card-img-top" alt="..." />
            <div className="text">
              <div className="text-main">
                <Card.Title><h5><b>Joseph Foster</b></h5></Card.Title>
                <Card.Text className='text-danger'><i>{lang === 'en' ? "Copywriter " : 'Kopirayter'}</i></Card.Text>
                <div className="icons">
                  <Card.Link href='https://www.instagram.com/qodeinteractive/'><i className="fa-brands fa-instagram"></i></Card.Link>
                  <Card.Link href='https://www.facebook.com/QodeInteractive/'><i className="fa-brands fa-facebook-f"></i></Card.Link>
                  <Card.Link href='https://www.linkedin.com/company/qode-themes/'><i className="fa-brands fa-linkedin"></i></Card.Link>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
{/* <div className="readmore">
  <Card.Title><h1><b>Lets take it to the next step and work together <span className='text-danger'>?</span></b></h1></Card.Title>
  <button className='btn mt-4'><b>Read More</b></button>
</div> */}
    </>
  )
}

export default Ourstudio