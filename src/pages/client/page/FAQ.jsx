import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { Tab, Tabs } from 'react-bootstrap'
import { LangContext } from '../../../context/LangContext'
import Header from '../../../components/Header'

const FAQ = () => {
  const { totalItems } = useCart()
  const [lang,setLang] = useContext(LangContext)
  return (
    <>
    <Header /> 
    <div>
      <div className="FaqPage-section1 ">
        <div className="aboutus-section1">
        <div className="aboutus-section1-img">
          <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Faq-title-area-img.jpg" alt="error"  className='img-fluid'/>
        </div>
        <div className="aboutus-section1-main">
          <b className='px-5'>FAQ.</b>
          <i className='px-5'>{lang=="en" ? "New York City, 5 Days, 32 Speakers, 13 workshops" : "New York City, 5 Gün, 32 Spiker, 13 seminar"}  <br />{lang=="en" ? "Sign up now and secure your arrival" : "İndi qeydiyyatdan keçin və gəlişinizi təmin edin"} </i>
        </div>
      </div>
      </div>
      <div className="FaqPage-section2 my-5">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

            <div className="col-lg-6">
              <h2 className="display-7 fw-bold text-body-emphasis mb-5">{lang=="en" ? " Every question thet you have, we have an answer." : "Sizi maraqlandıran hər suala cavabımız var."}</h2>
              <Tabs className='tabs mb-3'>
                <Tab eventKey="home" title="SUPPORT" className='tab' style={{ color: "grey" }}>
                {lang=="en" ? "Welcome! We, as Software Company, are committed to providing you with the best software solutions. Do you need assistance with your projects or software? Our expert team is here to resolve your technical issues and optimize your projects. We are ready to assist with technical support, troubleshooting, and project consultation, among other matters. We provide support throughout every stage of software development, from start to finish. Let us know your questions or needs to determine how we can assist you. We are eager to collaborate." : "Xoş gəldiniz! Biz, Proqram Şirkəti olaraq, sizə ən yaxşı proqram həllərini təqdim etməyə sadiqik. Layihələriniz və ya proqram təminatı ilə bağlı yardıma ehtiyacınız varmı? Ekspert komandamız texniki problemlərinizi həll etmək və layihələrinizi optimallaşdırmaq üçün buradadır. Biz digər məsələlərlə yanaşı, texniki dəstək, problemlərin aradan qaldırılması və layihə ilə bağlı məsləhətləşmələrdə kömək etməyə hazırıq. Biz proqram təminatının inkişafının hər mərhələsində, başlanğıcdan sona qədər dəstək veririk. Sizə necə kömək edə biləcəyimizi müəyyən etmək üçün suallarınızı və ya ehtiyaclarınızı bizə bildirin. Biz əməkdaşlıq etməyə can atırıq."}
                  
                </Tab>
                <Tab eventKey="profile" title="LIVE CHAT" className='tab' style={{ color: "grey" }}>
                {lang=="en" ? "You can get instant support through live chat. Share your questions, concerns, or needs with us. Our expert support team is here to assist you with software projects, technical issues, or general inquiries. Live chat helps you quickly resolve issues in your projects. We can intervene instantly to address your concerns. If you need more details or technical information about your projects or software, contact us through live chat. At the end of the chat, we can provide you with a personalized summary or guidance." : "Canlı söhbət vasitəsilə ani dəstək ala bilərsiniz. Suallarınızı, narahatlıqlarınızı və ya ehtiyaclarınızı bizimlə paylaşın. Bizim ekspert dəstək komandamız proqram layihələri, texniki məsələlər və ya ümumi sorğularla sizə kömək etmək üçün buradadır. Canlı söhbət layihələrinizdəki problemləri tez həll etməyə kömək edir. Narahatlıqlarınızı həll etmək üçün dərhal müdaxilə edə bilərik. Layihələriniz və ya proqram təminatınız haqqında ətraflı məlumat və ya texniki məlumata ehtiyacınız varsa, canlı söhbət vasitəsilə bizimlə əlaqə saxlayın. Söhbətin sonunda biz sizə fərdiləşdirilmiş xülasə və ya təlimat təqdim edə bilərik."}
                  
                </Tab >
                <Tab eventKey="contact" title="MAILING LIST" className='tab' style={{ color: "grey" }}>
                {lang=="en" ? "Would you like to receive the latest news, products, and updates from Software Company? Stay connected with us and keep your finger on the pulse of the tech world. Get the latest news and updates, along with special offers and events, by subscribing via email. Stay informed and get the freshest insights into software projects, trends, and future technologies. Email subscription allows you to receive daily, weekly, or monthly updates about software solutions and advancements. Your email address will never be shared with third parties." : "Software Company-dən ən son xəbərləri, məhsulları və yeniləmələri almaq istərdinizmi? Bizimlə əlaqədə qalın və barmağınızı texnologiya dünyasının nəbzində saxlayın. E-poçt vasitəsilə abunə olmaqla, xüsusi təkliflər və tədbirlərlə birlikdə ən son xəbərləri və yeniləmələri əldə edin. Xəbərdar olun və proqram layihələri, tendensiyalar və gələcək texnologiyalar haqqında ən təzə fikirlər əldə edin. E-poçt abunəliyi sizə proqram həlləri və təkmilləşdirmələr haqqında gündəlik, həftəlik və ya aylıq yeniləmələri almağa imkan verir. E-poçt ünvanınız heç vaxt üçüncü tərəflərlə paylaşılmayacaq."}
                  
                </Tab>
              </Tabs>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Faq-phone-img.png" alt="error" />
            </div>
          </div>
        </div>

      </div>
      <div className="b-color p-5">
      <div className="FagPage-section3 ">
        <div className="FagPage-section3-part1">
          <h1 className='mb-5'><b>{lang=="en" ? "Some of the questions" : "Suallardan bəziləri"} </b></h1>
          <div className="accordion " id="accordionFlushExample">
            <div>
              <h2>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                {lang=="en" ? "What services does your company offer?" : "Şirkətiniz hansı xidmətləri təklif edir?"} 
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> {lang=="en" ? "As a Software Company, we provide a wide range of technology and software services. Our services encompass customized software development, web design and development, mobile app development, cloud-based solutions, data analytics, cybersecurity consulting, and digital marketing, among others. Additionally, we create tailored software solutions that meet the specific needs of businesses and manage each project meticulously to ensure successful completion." : "Proqram təminatı şirkəti olaraq biz geniş çeşiddə texnologiya və proqram təminatı xidmətləri təqdim edirik. Xidmətlərimiz fərdi proqram təminatının hazırlanması, veb dizaynı və inkişafı, mobil proqramların hazırlanması, bulud əsaslı həllər, məlumat analitikası, kibertəhlükəsizlik üzrə konsaltinq və rəqəmsal marketinq və digərləri əhatə edir. Bundan əlavə, biz müəssisələrin xüsusi ehtiyaclarına cavab verən xüsusi proqram həlləri yaradırıq və müvəffəqiyyətlə tamamlanmasını təmin etmək üçün hər bir layihəni diqqətlə idarə edirik."}</div>
              </div>
            </div>
            <div >
              <h2>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                {lang=="en" ? "How do your project processes work?" : "Layihə prosesləri necə işləyir?"} 
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{lang=="en" ? "Our projects follow a process that begins with the analysis of customer requirements and the design phase. During this stage, the project's goals and features are defined. Next, our expert team moves on to the coding phase, where the foundational structure of the software is created. After that, rigorous testing and quality control are conducted at each stage. Finally, the project goes through deployment and is made available for use." : "Layihələrimiz müştəri tələblərinin təhlili və dizayn mərhələsi ilə başlayan bir prosesi izləyir. Bu mərhələdə layihənin məqsədləri və xüsusiyyətləri müəyyən edilir. Daha sonra ekspert komandamız proqram təminatının təməl strukturunun yaradıldığı kodlaşdırma mərhələsinə keçir. Bundan sonra hər mərhələdə ciddi sınaq və keyfiyyətə nəzarət aparılır. Nəhayət, layihə yerləşdirmədən keçir və istifadəyə verilir."}  </div>
              </div>
            </div>
            <div >
              <h2>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                {lang=="en" ? "How do you determine project costs? " : "Layihə xərclərini necə müəyyənləşdirirsiniz?"} 
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> {lang=="en" ? "Project costs vary depending on the complexity, size, and specific requirements of the project. After a thorough review of the project details, we can provide a cost estimate tailored to your needs. Our pricing approach takes into account factors such as the scope of work, technology stack, development hours, and any additional services required. Our goal is to work closely with you to align the project's cost with your budget and expectations while delivering high-quality results." : "Layihənin dəyəri layihənin mürəkkəbliyindən, ölçüsündən və xüsusi tələblərindən asılı olaraq dəyişir. Layihənin təfərrüatlarını hərtərəfli nəzərdən keçirdikdən sonra ehtiyaclarınıza uyğunlaşdırılmış xərclər smetasını təqdim edə bilərik. Bizim qiymət yanaşmamız işin həcmi, texnologiya yığını, inkişaf saatları və tələb olunan hər hansı əlavə xidmətlər kimi amilləri nəzərə alır. Məqsədimiz yüksək keyfiyyətli nəticələr təqdim edərkən layihənin dəyərini büdcənizə və gözləntilərə uyğunlaşdırmaq üçün sizinlə sıx əməkdaşlıq etməkdir."}</div>
              </div>
            </div>
            <div >
              <h2>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                {lang=="en" ? "What is the completion timeframe for your projects? " : "Layihələriniz üçün tamamlanma müddəti nə qədərdir?"}
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> {lang=="en" ? "The completion timeframe for each project is a dynamic aspect that is influenced by several factors, including project complexity, size, specific features, and client requirements. We recognize that no two projects are alike, and as such, we approach each one with a tailored timeline in mind. During the initial stages of project planning, we conduct a thorough assessment to gain a deep understanding of the project's intricacies." : "Hər bir layihə üçün tamamlanma müddəti layihənin mürəkkəbliyi, ölçüsü, spesifik xüsusiyyətləri və müştəri tələbləri daxil olmaqla bir neçə amildən təsirlənən dinamik aspektdir. Biz başa düşürük ki, heç bir iki layihə bir-birinə bənzəmir və buna görə də hər birinə uyğunlaşdırılmış vaxt qrafiki ilə yanaşırıq. Layihənin planlaşdırılmasının ilkin mərhələlərində biz layihənin incəliklərini dərindən dərk etmək üçün hərtərəfli qiymətləndirmə aparırıq."}</div>
              </div>
            </div>
            <div >
              <h2>
                <button className="accordion-button p-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                {lang=="en" ? "What communication methods can we use? " : "Hansı ünsiyyət üsullarından istifadə edə bilərik?"}
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body"> {lang=="en" ? "Communication is a fundamental part of establishing a healthy and effective relationship with our clients and business partners. Therefore, we adopt a flexible and versatile approach to communication. There are several different ways to communicate with us. Firstly, you can contact us using the contact information provided on our Contact page on our website. This information includes contact numbers you can use to send us an email or call us directly." : "Ünsiyyət müştərilərimiz və biznes tərəfdaşlarımızla sağlam və səmərəli münasibətlərin qurulmasının əsas hissəsidir. Buna görə də, biz ünsiyyətə çevik və çox yönlü bir yanaşma tətbiq edirik. Bizimlə ünsiyyət qurmağın bir neçə fərqli yolu var. Əvvəla, saytımızdakı Əlaqə səhifəmizdə göstərilən əlaqə məlumatlarından istifadə edərək bizimlə əlaqə saxlaya bilərsiniz. Bu məlumatlara bizə e-poçt göndərmək və ya birbaşa zəng etmək üçün istifadə edə biləcəyiniz əlaqə nömrələri daxildir."}</div>
              </div>
            </div>
            <div >
              <h2>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                {lang=="en" ? "Do you have a customer satisfaction guarantee? " : "Müştəri məmnuniyyətinə zəmanətiniz varmı?"} 
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{lang=="en" ? "Customer satisfaction is one of our core values and always our top priority. Ensuring that our customers are satisfied with their collaboration with us is one of our primary objectives. Therefore, we employ a range of approaches to guarantee customer satisfaction. First and foremost, we meticulously manage our projects and strive to adhere to high-quality standards. Understanding our customers' needs thoroughly and shaping our projects accordingly is a key focus." : "Müştəri məmnuniyyəti bizim əsas dəyərlərimizdən biridir və həmişə bizim prioritetimizdir. Müştərilərimizin bizimlə əməkdaşlıqdan məmnun qalmalarını təmin etmək əsas məqsədlərimizdən biridir. Buna görə də, biz müştəri məmnuniyyətini təmin etmək üçün bir sıra yanaşmalardan istifadə edirik. İlk növbədə, biz layihələrimizi diqqətlə idarə edirik və yüksək keyfiyyət standartlarına riayət etməyə çalışırıq. Müştərilərimizin ehtiyaclarını hərtərəfli başa düşmək və layihələrimizi buna uyğun formalaşdırmaq əsas diqqət mərkəzindədir."}</div>
              </div>
            </div>
          </div>

        </div>
        <div className="FagPage-section3-part2 p-5">
          <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Faq-accordion-img.jpg" alt="error" />
        </div>
      </div>
      </div>
    </div>
    </>
   
  )
}

export default FAQ