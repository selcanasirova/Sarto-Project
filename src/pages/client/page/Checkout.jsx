import React, { useState } from 'react'
import { useCart } from 'react-use-cart';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../../../components/Header';


const Checkout = () => {
    const {  items,  cartTotal,emptyCart } = useCart();
    const navigate =useNavigate()

    const [inputGroup] = useState([
          {
            label: "first_name",
            value: "",
          },
          {
            label: "last_name",
            value: "",
          },
          {
            label: "adress",
            value: "",
          },
      
          {
            label: "town",
            value: "",
          },
      
          {
            label: "state",
            value: "",
          },
      
          {
            label: "postcode",
            value: "",
          },
      
          {
            label: "email",
            value: "",
          },
      
          {
            label: "phone",
            value: "",
          },
        ]);
        const click=()=>{
            checkAllInputs(inputGroup);
            emptyCart()

        }
      
        const setInputDataToState = (label, sendData) => {
          for (let i = 0; i < inputGroup.length; i++) {
            if (inputGroup[i].label == label) {
              inputGroup[i].value = sendData;
            }
          }
        };
      
        const [validation , setValidation] = useState("")
      
      
        const checkAllInputs =(inputs)=>{
      
          const emptyInputs = inputs.filter((item)=> item.value.length === 0);
          if(emptyInputs.length !==0){
            var validationText = "Please first fill : "
            emptyInputs.map((input)=>{
              validationText= validationText + input.label + " , "
            })
            setValidation(validationText)
          }else{
            navigate("/payment")
          }
        }

        if (localStorage.getItem("user")) {
            return (
                <>
                <Header />
                <div className="empty" style={{height:"100px"}}></div>
                    <div className="checkout my-5" >
                        <div className="container  ">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="billing-details">
                                        <h3 className="title mt-2"><b>Billing Details</b></h3>
                                        <p className="py-2 text-danger">{validation}</p>
                                        <hr />
                                        <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>First Name
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="text" className="form-control my-3" onChange={(e) =>setInputDataToState("first_name", e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="text" className="form-control my-3" onChange={(e) =>setInputDataToState("last_name", e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Country
                                                        <span className="required">*</span>
                                                    </label>
                                                    <div className="select-box my-3">
                                                        <select className="form-control" >
                                                            <option value={5}>USA</option>
                                                            <option value={1}>Azerbaijan</option>
                                                            <option value={2}>United Kingdom</option>
                                                            <option value={0}>Turkiye</option>
                                                            <option value={3}>France</option>
                                                            <option value={4}>Japan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Address
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="text" className="form-control my-3" onChange={(e) =>setInputDataToState("adress", e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Town / City
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="text" className="form-control my-3" onChange={(e) =>setInputDataToState("town", e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>State / County
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="text" className="form-control my-3" onChange={(e) =>setInputDataToState("state", e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Postcode / Zip
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="text" className="form-control my-3" onChange={(e) =>setInputDataToState("postcode", e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Email Address
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="email" className="form-control my-3" onChange={(e) =>setInputDataToState("email", e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label>Phone
                                                        <span className="required">*</span>
                                                    </label>
                                                    <input type="text" className="form-control my-3" onChange={(e) =>setInputDataToState("phone", e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="create-an-account" onChange={(e) =>setInputDataToState("form-check", e.target.value)}/>
                                                    <label className="form-check-label mb-3 fw-bold" htmlFor="create-an-account">Create an account?</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order col-lg-6 col-md-12 ">
                                    <div className="order-details">
                                        <h3 className="title mt-2"><b>Your Order</b></h3>
                                        <hr />
                                        <div className="total my-5">
                                            <table>
                                                <tbody>
                                                    {items.map((item) => (
                                                        <tr key={item.id}>
                                                            <td > {item.name} :</td>
                                                            <td className='ps-5 mt-2'>{item.price}$  x {item.quantity} </td>
                                                            <td className='ps-5 mt-2'>{item.price * item.quantity} $</td>
                                                            <td className='ps-5 mt-2'><img className='mt-1' src={item.img} alt="error" width={50}  /></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <h3 className='pt-5'>Order Total: {cartTotal} $</h3>
                                            <Link to={"/basket"}> <button className='p-2 px-4 mt-3' style={{backgroundColor:"rgb(215, 4, 4)",color:"white",border:"none"}} > Return to Cart</button></Link>
                                        </div>
                                        <div className="payment-box">
                                            <div className="payment-method">
                                                <p className='name'>
                                                    <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                                    <label htmlFor="direct-bank-transfer" className='fw-bold ms-3 mb-3 '>Direct Bank Transfer</label> <br />
                                                    Make your payment directly into our bank account. 
                                                </p>
                                                <p>
                                                    <input type="radio" id="paypal" name="radio-group" />
                                                    <label htmlFor="paypal" className='fw-bold ms-3'>PayPal</label>
                                                </p>
                                                <p>
                                                    <input type="radio" id="cash-on-delivery" name="radio-group" />
                                                    <label htmlFor="cash-on-delivery" className='fw-bold ms-3'>Cash on Delivery</label>
                                                </p>
                                            </div>
                                            <button className='py-2 px-5 updateBtn mt-2 col-lg-4' style={{backgroundColor:"rgb(215, 4, 4)",color:"white",border:"none"}} onClick={click}>Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <><Header />
                <div className="empty" style={{height:"100px"}}></div>
                
              <LinkContainer to="/login">
                <div className="btn-div my-5 d-flex justify-content-center py-5">
                  <button className="mt-5 btn btn-danger text-light fw-bold ">Log In </button>
                </div>
              </LinkContainer>
                </>
            );
          }

    
}

export default Checkout