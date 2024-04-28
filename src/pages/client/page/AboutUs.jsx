import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { LangContext } from '../../../context/LangContext'
import Header from '../../../components/Header'

const AboutUs= () => {
  const {totalItems}=useCart()
  const [lang,setLang] = useContext(LangContext)
  return (
    <>
    <Header />
      <div className="aboutus-section1">
        <div className="aboutus-section1-img">
          <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/About-us-section-holder-img-1.jpg" alt="error"  className='img-fluid'/>
        </div>
        <div className="aboutus-section1-main">
          <b className='px-5'>{lang==="en" ? "About" : "Bizim"}  <br /> {lang==="en" ? "Us." : "Haqqımızda"} </b>
          <i className='px-5'> {lang==="en" ? " Let's work together to create a success story." : "Bir uğur hekayəsi yaratmaq üçün birlikdə çalışaq."}</i>
        </div>
      </div>
      <div className="aboutus-section2">
        <div className="row">
        <Card className="section2-card card col-md-6 p-5" >
            <Card.Title className="card-body">
              <Card.Title className="card-title"><h1><b>{lang==="en" ? "WHO ARE WE?" : "Biz Kimik?"} </b></h1></Card.Title>
              <h5><i className='my-5'> {lang==="en" ? " Who is Sarto Software?": "Sarto Software kimdir?"}</i></h5>
              <Card.Text className="card-text my-3">{lang==="en" ? "Sarto Software is a software, design and coding laboratory that has been serving since 2013 and has dozens of contracted software developers who are experts in their fields. It was established to provide fast, reliable and continuous service for your custom software, mobile application and web design projects." : "Sarto Software 2013-cü ildən fəaliyyət göstərən proqram təminatı, dizayn və kodlaşdırma laboratoriyasıdır və öz sahələrində mütəxəssis olan onlarla müqaviləli proqram təminatı tərtibatçılarıdır. Xüsusi proqram təminatı, mobil tətbiqetmə və veb dizayn layihələriniz üçün sürətli, etibarlı və davamlı xidmət göstərmək üçün yaradılmışdır."} </Card.Text>
              
            </Card.Title>
          </Card>

          <Card className="section2-card card col-md-6 p-5" >
            <Card.Title className="card-body">
              <Card.Title className="card-title"><h1><b>{lang==="en" ?"EXPERTS AVAILABLE 24/7. " :"EKSPERTLER 24/7 Mövcuddur."} </b></h1></Card.Title>
              <h5><i className='my-5'>{lang==="en" ? "As a Coding Laboratory, We Work with Experts Available 24/7" : "Kodlaşdırma Laboratoriyası olaraq, 24/7 Mütəxəssislərlə işləyirik"} </i></h5>
              <Card.Text className="card-text my-3">{lang==="en" ? "Work with software developers and designers who are available 24/7, look for solutions to even the smallest problems, and are eager to bring your ideas to life. " : "24/7 mövcud olan proqram tərtibatçıları və dizaynerləri ilə işləyin, ən kiçik problemlərə belə həll yolları axtarın və ideyalarınızı həyata keçirməyə can atan."} </Card.Text>
              
            </Card.Title>
          </Card>

          <Card className="section2-card card col-md-6 p-5" >
            <Card.Title className="card-body">
              <Card.Title className="card-title"><h1><b>{lang==="en" ? "A TEAM THAT REACHES THE RESULT." : "NƏTİCƏYƏ ÇATAN KOMANDA."} </b></h1></Card.Title>
              <h5><i className='my-5'>{lang==="en" ? "Let's bring the project you have in mind to life." : "Gəlin ağlınızda olan layihəni həyata keçirək."} </i></h5>
              <Card.Text className="card-text my-3">{lang==="en" ? "It is very important that software projects are easily usable and sustainable by the target audience. However, most projects may fall far below expectations during the construction phase. Because it is very difficult to achieve goals successfully with studies that are not sustainable. As Codelab, we can offer sustainable, creative work that meets your goals. While carrying out these studies, our primary goal will be to implement your projects in a sustainable and usable manner." : "Proqram layihələrinin hədəf auditoriya tərəfindən asanlıqla istifadə edilə bilməsi və davamlı olması çox vacibdir. Bununla belə, əksər layihələr tikinti mərhələsində gözləntilərdən xeyli aşağı düşə bilər. Çünki davamlı olmayan araşdırmalarla hədəflərə uğurla çatmaq çox çətindir. Codelab olaraq hədəflərinizə cavab verən davamlı, yaradıcı iş təklif edə bilərik. Bu araşdırmaları həyata keçirərkən əsas məqsədimiz layihələrinizi davamlı və istifadəyə yararlı şəkildə həyata keçirmək olacaq."} </Card.Text>
              
            </Card.Title>
          </Card>

          <Card className="section2-card card col-md-6 p-5" >
            <Card.Title className="card-body">
              <Card.Title className="card-title"><h1><b>{lang==="en" ? "IS IT IMPOSSIBLE ? WHAT IS THIS ?" : "BU MÜMKÜNDÜR? BU NƏDİR?"} </b></h1></Card.Title>
              <h5><i className='my-5'>{lang==="en" ? " The Most Difficult Software and Web Design Projects to Do Are Our Job." : "Ən Çətin Proqram təminatı və Veb Dizayn Layihələri Bizim İşimizdir."}</i></h5>
              <Card.Text className="card-text my-3"> {lang==="en" ? "Sarto Software and Expert Software Developers create software that is thought to be very difficult to make. We can offer the fastest and most efficient solutions even in the most difficult software projects. We do original work on your website, web design, special software and mobile application works." : "Sarto Proqram Təminatı və Mütəxəssis Proqram Tərtibatçıları düzəltməsinin çox çətin olduğu düşünülən proqram təminatı yaradırlar. Ən çətin proqram layihələrində belə ən sürətli və ən səmərəli həllər təklif edə bilərik. Veb saytınız, veb dizayn, xüsusi proqram və mobil proqram işlərində orijinal işlər görürük."}</Card.Text>
              
            </Card.Title>
          </Card>
          
        </div>
      </div>
      <div className="aboutus-section3">
        <h2><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</i></h2>
        <button><b>Read More</b></button>
      </div>
    </>
  )
}

export default AboutUs