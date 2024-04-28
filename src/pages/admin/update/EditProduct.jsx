// // import React from "react";
// // import ProductForm from "../ProductForm";
// // import { Col } from "react-bootstrap";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import slugify from "slugify";
// // import { editProduct, editProductFromDatabase } from "../../../manager/actions/newAction";

// // const EditProduct = () => {
// //     const {pe} = useParams();
// //     const productData = useSelector(p=>p);
// //     const productprop = productData.find(p=>slugify(p.title)===pe);
// //     const dispatch =useDispatch()
// //     const navigate = useNavigate()
// //   return (
// //     <div>
// //       <h1 className="text-center my-5">Edit Product</h1>
// //       <div className="d-flex justify-content-center my-5">
// //         <Col md={4}>
// //           <ProductForm editProduct={productprop}
// //           sendValue={(items)=>{
// //             dispatch(editProductFromDatabase(productprop.id,items));
// //             navigate('/admin')}} />
// //           <div className="back-home">
// //             <Link className="btn btn-danger mt-3" to="/">
// //               Back to Home{" "}
// //             </Link>
// //           </div>
// //         </Col>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditProduct;



// import { Col } from "react-bootstrap"
// import ProductForm from "../ProductForm"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate, useParams } from "react-router-dom"
// import slugify from "slugify"
// import { editNews, editNewsFromDatabase } from "../../../manager/actions/newAction"
// import Header from "../../../components/Header"

// const EditNews = () => {
//   const {ne} = useParams();
//   const newsdata = useSelector(p=>p);
//   const newsprop = newsdata.find(p=>p.id==ne);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   console.log(ne);
//   console.log(newsprop);
//   return (
//     <div>
//       <Header />
//         <div className="empty" style={{height:"100px"}}></div>
//         <h1 className='text-center my-3'>Edit Blog</h1>
//         <div className="d-flex justify-content-center">
//             <Col md={6}>
//                 <ProductForm editnews={newsprop} 
//                 sendValue={(items)=>{
//                   dispatch(editNewsFromDatabase(newsprop.id,items));
//                   navigate('/admin');
//               }}
//                  />
//             </Col>
//         </div>
//     </div>
//   )
// }

// export default EditNews