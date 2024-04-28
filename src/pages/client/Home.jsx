import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import ProductCard from '../../components/ProductCard';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../components/Header';
import { LangContext } from '../../context/LangContext';



const Home = () => {
  const { totalItems } = useCart()
  const newsData = useSelector(state => state)

console.log(newsData);
const [lang,setLang] = useContext(LangContext)

  return (
    <>
    <Header />
      <div className='section-1'>
        
        {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img height={700} src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-6.jpg" className="d-block w-100 img-fluid" alt="..." /></SwiperSlide>
        <SwiperSlide><img height={700} src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-3.jpg" className="d-block w-100 img-fluid" alt="..." /></SwiperSlide>
        <SwiperSlide><img height={700}  src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-4.jpg" className="d-block w-100 img-fluid" alt="error" /></SwiperSlide>
      </Swiper> */}

          <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="main">
            <p>{lang === 'en' ? "The creative power" : 'Yaradıcı güc'}</p>
            <Link to={"/about-us"}><button className='btn mt-4'>{lang === 'en' ? "Read More " : 'Daha çox'}</button></Link>
          </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-6.jpg" className="d-block w-100 img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-3.jpg" className="d-block w-100 img-fluid" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/home-2-slider-4.jpg" className="d-block w-100 img-fluid" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden"> {lang === 'en' ? "Previous" : 'Əvvəlki'}</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden"> {lang === 'en' ? "Next" : 'Sonrakı'}</span>
            </button>
          </div>

      </div>
      <div className="section2">
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
              <Card.Link href="/about-us" className="text-danger"><b>{lang === 'en' ? "EXPLORE " : 'KEŞFEDİN'}<i className="fa-solid fa-chevron-right"></i></b></Card.Link>
            </Card.Title>
          </Card>
          <Card className="section2-card3 card col-md-4 " >
            <Card.Title className="card-body">

              <Card.Title className="card-title"><h1><b>{lang === 'en' ? "Creative." : 'Yaradıcı.'}</b></h1></Card.Title>
              <Card.Text className="card-text my-5">{lang === 'en' ? "The world is a source of information for a creative person - he absorbs the information he needs to increase his creativity." : 'Dünya yaradıcı bir insan üçün məlumat mənbəyidir – öz yaradıcılığını artırmaq üçün ona lazım olan məlumatları mənimsəyir. '}</Card.Text>
              <Card.Link href="/our-studio" className="text-danger"><b>{lang === 'en' ? "EXPLORE " : 'KEŞFEDİN'}<i className="fa-solid fa-chevron-right"></i></b></Card.Link>
            </Card.Title>
          </Card>
        </div>
      </div>

      <div className="section-4 my-5">
        <div className="row">
        {newsData.map((item, index) => {
            return <ProductCard key={index} id={item.id} photo={item.photo} title={item.title} desc={item.desc} azdesc={item.azdesc} aztitle={item.aztitle} date={item.date} />

          })}
        </div>




      </div>

      <div className="section-5 my-5">
        <div className='row'>
          <Card className="card col-md-6  my-5" >
            <Card.Title className="card-body">
              <Card.Title className="card-title mt-5"><h2><b>{lang === 'en' ? "Creativity is the way of seeing things. " : 'Yaradıcılıq hər şeyi görmək üsuludur.'}</b></h2></Card.Title>

              <Card.Text className="card-text my-5">{lang === 'en' ? "Creativity is a different activity in which mental activity emerges. Creativity is a characteristic that people are born with. " : 'Yaradıcılıq zehni fəaliyyətin ortaya çıxardığı fərqli bir qabiliyyətdir.Yaradıcılıq insanların dünyaya gəldikləri andan onunla birgə yaranan bir xüsusiyyətdir.'}</Card.Text>
              <Button className='btn '><b>{lang === 'en' ? "Read More " : 'Daha çox oxu '}</b></Button>
            </Card.Title>
          </Card>

          <Card className="card col-md-6" >
            <Card.Img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/home-2-img-4.jpg" className="card-img-top" alt="..." />
          </Card>

          <Card className="card col-md-6" >
            <Card.Img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/home-2-img-3.jpg" className="card-img-top" alt="..." />
          </Card>

          <Card className="card col-md-6" >
            <Card.Title className="card-body">
              <Card.Title className="card-title mt-5"><h2><b>{lang === 'en' ? "Inspiration is only the first step. " : 'İlham yalnız ilk addımdır.'}</b></h2></Card.Title>

              <Card.Text className="card-text my-5">{lang === 'en' ? "The purpose of life is a purposeful life. In the meaning of life, it is necessary to use its beauty." : 'Həyatın məqsədi - məqsədli bir həyatdır.Həyatın mənasında onun gözəlliyindən istifadə etmək lazımdır.'}</Card.Text>
              <Button className='btn '><b>{lang === 'en' ? "Read More " : 'Daha çox oxu '}</b></Button>
            </Card.Title>

          </Card>

        </div>

      </div>

      {/* <div className="readmore">
        <Card.Title><h1><b>{lang === 'en' ? "Want to work with us? " : 'Bizimlə işləmək istəyirsiniz?'}</b></h1></Card.Title>
        <button className='btn mt-4'><b>{lang === 'en' ? "Read More " : 'Daha çox oxu '}</b></button>
      </div> */}


      <div className="section-6">
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

      {/* <div className="section-7 mx-5">
        <div className="app my-5">

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <p><b>Lorem ipsum dolor sit amet, consec ti tur adipiscing elit. Etiam fermen ancl.</b></p>
              <h5 className='m-3'><i>{lang === 'en' ? "Lindon Leader / Graphic Designer " : 'Lindon Lider / Qrafik Dizayner'}</i></h5>
            </SwiperSlide>
            <SwiperSlide>
              <p><b>Aenean com ligula eg dolor suis utile.  Etur adipisci dolor sit amet, consecte</b></p>
              <h5 className='m-3'><i>{lang === 'en' ? "Margaret Lnglin / Art Director " : 'Margaret Lnglin / Art Direktor'}</i></h5>
            </SwiperSlide>
            <SwiperSlide>
              <p><b>Etiam fermen ac tincidunt male. Tem ipsum dolor sit amet, consec teturati. </b></p>
              <h5 className='m-3'><i>{lang === 'en' ? "Matt Austin / Photographer " : 'Matt Austin / Fotoqraf'}</i></h5>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}

      <div className="section-8">
        <div className="container">
          <div className="row py-5">

            <Swiper
              slidesPerView={2}
              spaceBetween={30}
            >
              <SwiperSlide><img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/main-home-client-1.png" alt="error" /></SwiperSlide>
              <SwiperSlide><img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/main-home-client-2.png" alt="error" /></SwiperSlide>
              <SwiperSlide><img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/main-home-client-3.png" alt="error" /></SwiperSlide>
              <SwiperSlide><img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/main-home-client-4.png" alt="error" /></SwiperSlide>
              <SwiperSlide><img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/main-home-client-5.png" alt="error" /></SwiperSlide>
              <SwiperSlide><img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/Client-Sarto-new.png" alt="error" /></SwiperSlide>
            </Swiper>

          </div>
        </div>
      </div>

    </>


  )
}

export default Home