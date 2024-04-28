import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import {  Container } from 'react-bootstrap'

const WhatWeDo = () => {
    const {totalItems}=useCart()
  return (
    <>
    <div className="whatwedo-section1">
    <nav className='navbar navbar-expand-lg bg-none position-relative'>
      <div className="nav-logo ms-5">
       {/* <div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p><img width={100} src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/Logo-dark.png" alt="error" /></a> */}
      </div>
      <div className="nav-main">
        <ul className="mx-auto mb-2 mb-lg-0">
          <li> 
            <NavLink className='nav-part ' to="/">HOME</NavLink>
          </li>
          <li>
            <a className='nav-part' href="/">PAGES</a>
            <div className="pages-menu">
              <ul className='my-3'>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to="/about-us" ><p>About Us</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to="/our-studio'" ><p>Our Studio</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to="/what-we-do"><p>What We Do</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Our Team</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Meet The Team</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Our Workflow</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Case Study</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Our Services</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Pricing Plans</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Our Clients</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Contact Us</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Get In Touch</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>FAG</p></Link></div></li>
                <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>404 Error Page</p></Link></div></li>
              </ul>
            </div>
          </li>
          <li>
            <a className='nav-part' href="/">PORTFOLIO</a>
          <div className="portfolio-menu ">
          <ul className='my-3'>
              <li><b>Portfolio Types</b></li>
              <li ><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Standart</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Gallery Medium Space</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Gallery Small Space</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Gallery No Space</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Masonry Medium Space</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Masonry Small Space</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Masonry No Space</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Pinterest</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Tabs Slider</p></Link></div></li>
            </ul>
            <ul>
              <li><b>Layouts</b></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Two Columns</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Three Columns</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Three Columns Wide</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Four Columns</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Four Columns Wide</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Five Columns Wide</p></Link></div></li>
            </ul>
          
            <ul>
              <li><b>Hover Types</b></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Shader</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Overlay Hover</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Overlay Boxed</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Overlay Floated</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Overlay With Centered Info</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Overlay With Crosshair</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Overlay Slide From Bottom</p></Link></div></li>
            </ul>
            <ul>
              <li><b>Portfolio Single</b></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Small Images</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Small Slider</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Large Images</p> </Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Large Slider</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Large Masonry</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Small Masonry</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Gallery</p></Link></div></li>
            </ul>
          </div>
        </li>
          
          <li>
            <a className='nav-part' href="/">BLOG</a>
            <div className="blog-menu ">
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Blog Right Sidebar</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Blog Left Sidebar</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Blog No Sidebar</p></Link></div></li>
            </div>
          </li>
          <li>
            <a className='nav-part' href="/">SHOP</a>
            <div className="shop-menu ">
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to="/shop-sidebar"><p>List With Sidebar</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Single Product</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>My Account</p></Link></div></li>
              <li><div className='menu'><div className="line mb-3 me-2"></div><Link className='menu-links' to=""><p>Cart</p></Link></div></li>
            </div>
          </li>
         
        </ul>
      </div>
      <div className="icon ">
        <Link to={"/basket"} className="position-relative ">
          <i className="fa-solid fa-basket-shopping"></i>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger ms-2">
            {totalItems}
            </span>
        </Link>
          

        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
    <div className="whatwedo-section1-text">
        <p className='text-main'><b>What We Do.</b></p>
        <h5><i>New York City, 5 Days, 32 Speakers, 13 workshops Sign up <br /> now and secure your arrival</i></h5>
    </div>
    </div>
    <Container>
    <div className="whatwedo-section2">
    <div className="whatwedo-section2-parts p-5">
        <div className="whatwedo-section2-img">
            <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Service-img-1.jpg" alt="error" />
        </div>
        <div className="whatwedo-section2-text ms-5">
            <h1 className='mb-2'><b>The service that we do for you.</b></h1>
            <h5 className='mb-5'><i>Lorem ipsum dolor sit amet</i></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliqua suscipit sed purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliquam suscipit sed purus lorem.</p>
        </div>

    </div>
    <div className="whatwedo-section2-parts p-5">
    <div className="whatwedo-section2-text ">
            <h1 className='mb-2'><b>Digital branding & marketing.</b></h1>
            <h5 className='mb-5'><i>Lorem ipsum dolor sit amet</i></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliqua suscipit sed purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliquam suscipit sed purus lorem.</p>
        </div>
        <div className="whatwedo-section2-img ms-5">
            <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Service-img-2.jpg" alt="error" />
        </div>
    </div>
    <div className="whatwedo-section2-parts p-5">
        <div className="whatwedo-section2-img">
            <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Service-img-3.jpg" alt="error" />
        </div>
        <div className="whatwedo-section2-text ms-5">
            <h1 className='mb-2'><b>Creative thinking & design.</b></h1>
            <h5 className='mb-5'><i>Lorem ipsum dolor sit amet</i></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliqua suscipit sed purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliquam suscipit sed purus lorem.</p>
        </div>
    </div>
    <div className="whatwedo-section2-parts p-5">
    <div className="whatwedo-section2-text ">
            <h1 className='mb-2'><b>SEO, analytics & marrketing.</b></h1>
            <h5 className='mb-5'><i>Lorem ipsum dolor sit amet</i></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliqua suscipit sed purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula leo. Aliquam suscipit sed purus lorem.</p>
        </div>
        <div className="whatwedo-section2-img ms-5">
            <img src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/Service-img-4.jpg" alt="error" />
        </div>
    </div>
    </div>
    </Container>
    </>
  )
}

export default WhatWeDo