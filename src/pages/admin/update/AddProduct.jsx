// // import React from 'react'
// // import ProductForm from '../ProductForm'
// // import { Col } from 'react-bootstrap'
// // import { useDispatch } from 'react-redux'
// // import {  useNavigate } from 'react-router-dom'
// // import { addProduct, addProductToDatabase } from '../../../manager/actions/newAction'


// // const AddProduct = () => {
// //   const dispatch =useDispatch()
// //   const navigate = useNavigate()
 
// //   return (
// //     <div>
// //       <h1 className='text-center my-5'>Add Product</h1>
// //       <div  className='d-flex justify-content-center my-5'>
// //       <Col md={4}>

       
// //         <ProductForm sendValue={(items)=>{
// //           dispatch(addProductToDatabase(items))
// //           navigate('/admin')
// //         }}/>
// //         <div className="back-home">
// //         </div>
      
// //       </Col>
      
// //       </div>
// //     </div>
// //   )
// // }

// // export default AddProduct;



// import { Col } from "react-bootstrap"
// import NewsForm from "../ProductForm"
// import { useDispatch } from "react-redux"
// import {  addNewsToDatabase } from "../../../manager/actions/newAction";
// import { useNavigate } from "react-router-dom";
// import Header from "../../../components/Header";

// const AddNews = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//   return (
//     <div>
//         <Header />
//         <div className="empty" style={{height:"100px"}}></div>
//         <h1 className="text-center my-4">Add News</h1>
//         <div className="d-flex justify-content-center">
//             <Col md={6}>
//                 <NewsForm sendValue={(items)=>{
//                     dispatch(addNewsToDatabase(items));
//                     navigate('/admin')
//                 }} />
//             </Col>
//         </div>
//     </div>
//   )
// }

// export default AddNews