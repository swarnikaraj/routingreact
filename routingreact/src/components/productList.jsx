import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export const Productdetails=()=>{
   const {id}=useParams()
  
  const [item,setItem]=useState(null)

   
    
 
   
    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`).then(d=>d.json()).then(res=>{setItem(res)})
     
        .catch((e)=>{
          console.log(e)
          });
      
    }, [id])
    return <div>
        users {id}
        {item.name}
        {item.price}
              
    </div>
}