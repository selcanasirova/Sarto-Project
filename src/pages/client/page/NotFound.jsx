import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import { LangContext } from '../../../context/LangContext';

const NotFound = () => {
    const [lang, setLang] = useContext(LangContext);
  return (
    <>
    <Header />
    <div className="empty" style={{height:"100px"}}></div>
    <div className="container text-center  mt-5">
      <h2 className="display-4 text-danger">{lang==="en"?"404 Not Found": "404 tapılmadı"}</h2>
      <p className="lead">{lang==="en"?"The page you are looking for does not exist.": "Axtardığınız səhifə mövcud deyil."}</p>
      <p>{lang==="en"?"Go back to": ""} <Link to="/">{lang==="en"?"Home":"Ana Səhifə"} </Link>.</p>
    </div>
    </>
  );
};

export default NotFound;