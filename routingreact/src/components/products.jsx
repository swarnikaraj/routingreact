import { useState } from "react"

import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Products=()=>{
    

    const [prods,setProds]=useState([])

    function getitems(){

    fetch('http://localhost:3001/products').then(d=>d.json()).then(res=>{setProds(res)})
    .catch((e)=>{
        console.log(e)
       });
    }

  

    useEffect(()=>{
        getitems()
    },[])


   


    return <div >
    { 
        prods.map((prod)=>(
            <div>
            <Link to={`/products/${prod.id}`}>{prod.name} more</Link>
        
         </div>)
         )
    } 

       
    </div>
}