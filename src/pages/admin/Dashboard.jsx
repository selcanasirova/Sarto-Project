// // import React from 'react'
// // import { Button, Container, Table } from 'react-bootstrap'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { LinkContainer } from 'react-router-bootstrap'
// // import { removeProduct, removeProductFromDatabase } from '../../manager/actions/newAction'
// // import { Link } from 'react-router-dom'
// // import slugify from 'slugify'

// // const Dashboard = ({id,title,desc,count,img}) => {
// //   const productdata =useSelector(p=>p)
// //   const dispatch =useDispatch()
// //   return (
// //     <div>
// //       <h1 className='text-center my-5'>Admin Panel</h1>
// //       <Container>
// //         <LinkContainer to="add"><Button className='mb-3'>Add</Button></LinkContainer>
// //       <Table striped bordered hover>
// //       <thead>
// //         <tr>
// //           <th>N</th>
// //           <th>Product</th>
// //           <th>Photo</th>
// //           <th>Title</th>
// //           <th>Description</th>
// //           <th>Edit</th>
// //           <th>Delete</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {/* {productdata.map((item,count)=>(
// //           <tr key={count}>
// //             <td>{count+1}</td>
// //             <td>{item.title}</td>
// //             <td><img width={150} src={item.img} alt="error" /></td>
// //             <td>Otto</td>
// //             <td>{item.desc}</td>
// //             <td><Link to={`edit/${slugify(item.title)}`}><Button>Edit</Button></Link></td>
// //             <td><Button onClick={()=>{dispatch(removeProductFromDatabase({id:item.id}))}}>Delete</Button></td>
// //           </tr>
// //         ))} */}
        
// //           <tr key={count}>
// //             <td>{count+1}</td>
// //             <td>{title}</td>
// //             <td><img width={150} src={img} alt="error" /></td>
// //             <td>Otto</td>
// //             <td>{desc}</td>
// //             <td><Link to={`edit/${slugify(title)}`}><Button>Edit</Button></Link></td>
// //             <td><Button onClick={()=>{dispatch(removeProductFromDatabase({id:id}))}}>Delete</Button></td>
// //           </tr>
        
// //       </tbody>
// //     </Table>

    
// //     <Link className='btn btn-danger my-3' to="/">Back to Home </Link>
// //       </Container>
// //     </div>
// //   )
// // }

// // export default Dashboard


// import { Button } from 'react-bootstrap';
// import Table from 'react-bootstrap/Table';
// import { useDispatch, useSelector } from 'react-redux';
// import { LinkContainer } from 'react-router-bootstrap';
// import { removeNews, removeNewsFromDatabase } from '../../manager/actions/newAction';
// import { Link } from 'react-router-dom';
// import slugify from 'slugify';
// import Header from '../../components/Header';


// function Dashbaord() {
//     const newsdata = useSelector(p => p);
//     const dispatch = useDispatch();
//     return (
//         <>
//         <Header />
//         <div className="empty" style={{height:"100px"}}></div>
//             <h1 className='text-center'>Admin Panel</h1>
//             <LinkContainer to="add"><Button variant='dark mb-3 ms-5'>ADD</Button></LinkContainer>
//             <Table striped bordered hover className='container'>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Photo</th>
//                         <th>Date</th>
//                         <th>Title</th>
//                         <th>AzTitle</th>
//                         <th>Description</th>
//                         <th>AzDecription</th>
//                         <th>EDIT</th>
//                         <th>DELETE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {newsdata.map((item, count) => (
//                         <tr key={count}>
//                             <td>{count + 1}</td>
//                             <td><img width={100} src={item.photo} alt='err' /></td>
//                             <td>{item.date}</td>
//                             <td>{item.title}</td>
//                             <td>{item.aztitle}</td>
//                             <td>{item.desc}</td>
//                             <td>{item.azdesc}</td>
//                             <td><Link to={`edit/${item.id}`}><Button variant='warning'>Edit</Button></Link></td>
//                             <td ><Button onClick={() => { dispatch(removeNewsFromDatabase( item.id )) }} 
//                             variant="danger">X</Button></td>
//                         </tr>
//                     ))}


//                 </tbody>
//             </Table>

//         </>
//     );
// }

// export default Dashbaord;