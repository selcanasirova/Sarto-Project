import React, { useState } from 'react'

const CustomAlert = ({text}) => {

    const [alertClass,setAlertClass] = useState("alert-active");

    setTimeout(()=>{
        setAlertClass("");
    }, 10000)


  return (
    <div className={`custom-alert-container ${alertClass} `} >
        <div className="main-box d-flex align-items-center justify-content-center flex-column">
            <div className="text-box mt-5 text-danger">
                <h3><b>{text}</b></h3>
            </div>
        </div>
    </div>
  )
}

export default CustomAlert