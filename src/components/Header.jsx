// import React, { useContext, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { LangContext } from "../context/LangContext";
// import { ModeContext } from "../context/ModeContext";
// import { useCart } from "react-use-cart";

// const Header = () => {
//   const [lang, setLang] = useContext(LangContext);
//   const [mode, setMode] = useContext(ModeContext);
//   const { totalItems } = useCart();
//   const defineUser = () => {
//     if (!user) {
//       return "Sign In";
//     } else {
//       return user.user_name;
//     }
//   };

//   useEffect(() => {
//     const storedMode = localStorage.getItem("mode");

//     if (storedMode) {
//       setMode(storedMode);
//     }
//   }, []);

  
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           {/* <img width={100} src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/Logo-dark.png" alt="error" /> */}
//           <img
//             width={100}
//             src="https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/logo-light-2.png"
//             alt=""
//             className="ms-5"
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-part nav-link active me-3" to="/">
//                 HOME
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-part nav-link active me-3" to="/about-us">
//                 About Us
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle me-3"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Shop
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink className="dropdown-item" to="/shop-sidebar">
//                     List With Sidebar
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink className="dropdown-item" to="/basket">
//                     Card
//                   </NavLink>{" "}
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     My Account
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-part nav-link active" to="/faq">
//                 Faq
//               </NavLink>
//             </li>
//           </ul>

//           <ul className="nav-icon g-5">
//             <li className="nav-icon-part">
//               <Link to="/wishlist">
//                 <i className="fa-regular fa-heart fs-5"></i>
//               </Link>
//             </li>
//             <li className="nav-icon-part">
//               <Link to={"/basket"} className="position-relative">
//                 <i className="fa-solid fa-basket-shopping"></i>
//                 <span className="position-absolute top-5 start-50 translate-middle badge rounded-pill bg-danger ms-2">
//                   {totalItems}
//                 </span>
//               </Link>
//             </li>

//             <li className="nav-icon-part">
//               <button
//                 className="modeBtn  border border-0 "
//                 style={{ background: "none" }}
//                 onClick={() => {
//                   mode === "light" ? setMode("dark") : setMode("light");
//                   mode === "light"
//                     ? localStorage.setItem("mode", "dark")
//                     : localStorage.setItem("mode", "light");
//                 }}
//               >
//                 {mode === "light" ? (
//                   <i className="fa-solid fa-moon"></i>
//                 ) : (
//                   <i className="fa-solid fa-sun"></i>
//                 )}
//               </button>
//             </li>

//             <li className="nav-icon-part">
//               <button
//                 className="langBtn  border border-0"
//                 onClick={() => {
//                   lang === "en" ? setLang("az") : setLang("en");
//                   lang === "en"
//                     ? localStorage.setItem("lang", "az")
//                     : localStorage.setItem("lang", "en");
//                 }}
//               >
//                 {lang === "en" ? "AZ" : "EN"}
//               </button>
//             </li>
//             <li className="nav-icon-part">
//               <div className="user-info-box  d-flex g-3 align-items-center ">
//                 {!user || !user.user_status ? (
//                   <Link to="/login" className="nav-part">
//                     <i class="fa-regular fa-user"></i>
//                   </Link>
//                 ) : user.user_status === "admin" ? (
//                   <div className="dropdown">
//                     <button
//                       className="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       {defineUser()}
//                     </button>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a
//                           className="dropdown-item"
//                           href="#"
//                           onClick={() => {
//                             navigate("/login");
//                           }}
//                         >
//                           Change User
//                         </a>
//                       </li>
//                       <li>
//                         <Link to={"/admin"} className="dropdown-item">
//                           Dashboard
//                         </Link>
//                       </li>
//                       {!user ? (
//                         ""
//                       ) : (
//                         <li>
//                           <a
//                             className="dropdown-item"
//                             href="#"
//                             onClick={() => {
//                               localStorage.removeItem("user");
//                               navigate("/");
//                               window.location.reload();
//                             }}
//                           >
//                             Log Out
//                           </a>
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 ) : (
//                   <div className="dropdown">
//                     <button
//                       className="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       {defineUser()}
//                     </button>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a
//                           className="dropdown-item"
//                           href="#"
//                           onClick={() => {
//                             navigate("/login");
//                           }}
//                         >
//                           Change User
//                         </a>
//                       </li>
//                       {!user ? (
//                         ""
//                       ) : (
//                         <li>
//                           <a
//                             className="dropdown-item"
//                             href="#"
//                             onClick={() => {
//                               localStorage.removeItem("user");
//                               navigate("/");
//                               window.location.reload();
//                             }}
//                           >
//                             Log Out
//                           </a>
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import { ModeContext } from "../context/ModeContext";
import { useCart } from "react-use-cart";

const Header = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useContext(LangContext);
  const [mode, setMode] = useContext(ModeContext);
  const { totalItems } = useCart();
  const [navbarBg,setNavbarBg] = useState(false)


   const scrollNavbarBg =()=>{
    if(window.scrollY >= 200){
        setNavbarBg(true)
      } else {
        setNavbarBg(false)
      }
   }

   window.addEventListener("scroll",scrollNavbarBg)
  const defineUser = () => {
    if (!user) {
      return "Sign In";
    } else {
      return user.user_name;
    }
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");

    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={navbarBg ? "navbar navbar_active" : "navbar "}>
      <div className="navbar-container">
        <div className="navbar-logo"></div>
        <div className={`navbar-links ${isOpen ? 'active' : ''} `}>
        <NavLink className="nav-part nav-link active me-3" to="/">{lang==="en"?"Home":"Ana Səhifə"} </NavLink> <b></b>
        <NavLink className="nav-part nav-link active me-3" to="/about-us">{lang==="en"?"About Us":"Haqqımızda"}</NavLink><b></b>
        <NavLink className="nav-part nav-link active me-3" to="/shop-sidebar">{lang==="en"?"Shop":"Mağaza"}</NavLink><b></b>
        <NavLink className="nav-part nav-link active me-3" to="/faq">{lang==="en"?"Faq":"Faq"}</NavLink><b></b>
        <NavLink className="nav-part nav-link active me-3" to="/our-studio">{lang==="en"?"Our Studio":"Bizim Studiyamız"}</NavLink>
        </div>
        <ul className={`nav-icon ${isOpen ? 'active' : ''} g-5`}>
               <li className="nav-icon-part">
                 <Link to="/wishlist">
                   <i className="fa-regular fa-heart fs-5"></i>
                 </Link>
               </li>
               <li className="nav-icon-part">
                 <Link to={"/basket"} className="position-relative">
                   <i className="fa-solid fa-basket-shopping"></i>
                   <span className="position-absolute top-5 start-50 translate-middle badge rounded-pill bg-danger ms-2">
                     {totalItems}
                   </span>
                 </Link>
              </li>

               <li className="nav-icon-part" >
                <button
                className="modeBtn  border border-0 "
                style={{ background: "none" }}
                onClick={() => {
                  mode === "light" ? setMode("dark") : setMode("light");
                  mode === "light"
                    ? localStorage.setItem("mode", "dark")
                    : localStorage.setItem("mode", "light");
                }}
              >
                {mode === "light" ? (
                  <i className="fa-solid fa-moon"></i>
                ) : (
                  <i className="fa-solid fa-sun"></i>
                )}
              </button>
            </li>

            <li className="nav-icon-part">
              <button
                className="langBtn  border border-0"
                onClick={() => {
                  lang === "en" ? setLang("az") : setLang("en");
                  lang === "en"
                    ? localStorage.setItem("lang", "az")
                    : localStorage.setItem("lang", "en");
                }}
              >
                {lang === "en" ? "AZ" : "EN"}
              </button>
            </li>
            <li className="nav-icon-part">
              <div className="user-info-box  d-flex g-3 align-items-center ">
                {!user || !user.user_status ? (
                  <Link to="/login" className="nav-part">
                    <i class="fa-regular fa-user"></i>
                  </Link>
                ) : user.user_status === "admin" ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {defineUser()}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Change User
                        </a>
                      </li>
                      <li>
                        <Link to={"/admin"} className="dropdown-item">
                          Dashboard
                        </Link>
                      </li>
                      {!user ? (
                        ""
                      ) : (
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => {
                              localStorage.removeItem("user");
                              navigate("/");
                              window.location.reload();
                            }}
                          >
                            Log Out
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                ) : (
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {defineUser()}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Change User
                        </a>
                      </li>
                      {!user ? (
                        ""
                      ) : (
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => {
                              localStorage.removeItem("user");
                              navigate("/");
                              window.location.reload();
                            }}
                          >
                            Log Out
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
