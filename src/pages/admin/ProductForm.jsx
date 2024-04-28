// // import React, { useState } from "react";
// // import { Button, FloatingLabel, Form } from "react-bootstrap";
// // // import { useDispatch } from 'react-redux'
// // // import { addProduct } from '../../manager/actions/newAction'

// // const ProductForm = ({sendValue,editProduct}) => {
// //   const [title, setTitle] = useState(editProduct? editProduct.title : "" );
// //   const [photo, setPhoto] = useState(editProduct? editProduct.img : "");
// //   const [description, setDescription] = useState(editProduct? editProduct.desc : "");

// //   // const dispatch=useDispatch()
// //   const productSubmited = (event) => {
// //     event.preventDefault();

// //     // if (title && photo && description) {
    
// //     //   dispatch(addProduct({title:title,img:photo,desc:description}))
// //     //   setTitle("")
// //     //   setPhoto("")
// //     //   setDescription("")
      
// //     // }

// //     sendValue({
// //       photo: photo,
// //       title: title,
// //       desc: description,
// //     });
// //   };
// //   return (
// //     <Form onSubmit={productSubmited}>
// //       <Form.Group className="mb-3" controlId="formBasicPassword">
// //         <Form.Label>Enter Title</Form.Label>
// //         <Form.Control
// //           value={title}
// //           onChange={(e) => {
// //             setTitle(e.target.value);
// //           }}
// //           type="text"
// //           placeholder="Title"
// //         />
// //       </Form.Group>

// //       <Form.Group className="mb-3" controlId="formBasicEmail">
// //         <Form.Label>Enter Photo</Form.Label>
// //         <Form.Control
// //           value={photo}
// //           onChange={(e) => {
// //             setPhoto(e.target.value);
// //           }}
// //           type="text"
// //           placeholder="Photo url"
// //         />
// //       </Form.Group>

// //       <FloatingLabel controlId="floatingTextarea2" label="Description">
// //         <Form.Control
// //           value={description}
// //           onChange={(e) => {
// //             setDescription(e.target.value);
// //           }}
// //           as="textarea"
// //           placeholder="Leave a comment here"
// //           style={{ height: "100px" }}
// //         />
// //       </FloatingLabel>
// //       <Button className="mt-3" variant="primary" type="submit">
// //         Submit
// //       </Button>
// //     </Form>
// //   );
// // };

// // export default ProductForm;


// import { useState } from 'react';
// import { FloatingLabel } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function NewsForm({sendValue,editnews}) {
//     const [photo,setPhoto] = useState(editnews?editnews.photo:'');
//     const [title,setTitle] = useState(editnews?editnews.title:'');
//     const [desc,setDesc] = useState(editnews?editnews.desc:'');
//     const [aztitle,azsetTitle] = useState(editnews?editnews.aztitle:'');
//     const [azdesc,azsetDesc] = useState(editnews?editnews.azdesc:'');
//     const [date,setDate] = useState(editnews?editnews.date:'');

    
//     const newsSubmited =event=>{
//         event.preventDefault();
//         sendValue({
//             photo,
//             title,
//             desc,
//             aztitle,
//             azdesc,
//             date
//         })
//     }
//     return (
//         <Form onSubmit={newsSubmited}>
         
//             <Form.Group className="mb-3" >
//                 <Form.Label>Photo</Form.Label>
//                 <Form.Control value={photo} onChange={e=>{setPhoto(e.target.value)}} type="text" placeholder="Enter photo url" />

//             </Form.Group>
            
//             <Form.Group className="mb-3" >
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control value={title} onChange={e=>{setTitle(e.target.value)}} type="text" placeholder="Enter title" />

//             </Form.Group>
//             <Form.Group className="mb-3" >
//                 <Form.Label>Date</Form.Label>
//                 <Form.Control value={date} onChange={e=>{setDate(e.target.value)}} type="text" placeholder="Enter date" />

//             </Form.Group>

//             <Form.Group className="mb-3" >
//                 <Form.Label>AzTitle</Form.Label>
//                 <Form.Control value={aztitle} onChange={e=>{azsetTitle(e.target.value)}} type="text" placeholder="Enter title" />

//             </Form.Group>

//             <FloatingLabel controlId="floatingTextarea2" label="Description">
//                 <Form.Control
//                     as="textarea"
//                     onChange={e=>{setDesc(e.target.value)}}
//                     style={{ height: '100px', "marginBottom": "20px" }}
//                     value={desc}
//                 />
//             </FloatingLabel>
//             <FloatingLabel controlId="floatingTextarea2" label="AzDescription">
//                 <Form.Control
//                     as="textarea"
//                     onChange={e=>{azsetDesc(e.target.value)}}
//                     style={{ height: '100px', "marginBottom": "20px" }}
//                     value={azdesc}
//                 />
//             </FloatingLabel>
//             <Button variant="primary" type="submit">
//                 Add
//             </Button>
//         </Form>
//     );
// }

// export default NewsForm;