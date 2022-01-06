import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export const Productdetails=()=>{
   const {id}=useParams()
  
  const [item,setItem]=useState(null)

   const getdetail=()=>{
    fetch(`http://localhost:3001/products/${id}`).then(d=>d.json()).then(res=>{setItem(res)})
     
    .catch((e)=>{
          console.log(e)
    });

    
    }
 
   
    useEffect(() => {
        getdetail()
       console.log(item)
    }, [])
    return <div>
        users {id}
              
    </div>
}