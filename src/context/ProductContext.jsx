import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext= createContext()


export const ProductProvider =(props)=>{
    const [product,setProduct]=useState([])

    useEffect (()=>{
    axios.get("https://mocki.io/v1/636682d1-0cff-46c4-b416-178f0e130577")
    .then(res=>setProduct(res.data))
    },[])
    
    return <ProductContext.Provider value={[product,setProduct]}>
        {props.children}
    </ProductContext.Provider>
}

