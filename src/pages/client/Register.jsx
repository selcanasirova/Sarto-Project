import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

const Register = () => {
    const navigate=useNavigate()
  return (
    <>
    <Header />
    <div className='login-page '>
       
        <div className="login p-5 m-5">
            <h1 className='mt-5'>Sing In</h1>
            <input type="text" className='m-5 p-2 ' placeholder='Name'/>
            <input type="email" className='mb-5 p-2 ' placeholder='Email'/>
            <input type="password " className='mb-5 p-2 ' placeholder='Password'/>
            <input type="password " className='mb-5 p-2 ' placeholder='Confirm Password'/>
            <button className='p-2 mt-5 '>Sing Up</button>
            <button className='p-2 m-5' onClick={()=>{navigate('/login')}}>or Login</button>
        </div>
    </div>
    </>
  )
}

export default Register