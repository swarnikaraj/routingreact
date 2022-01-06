import { Link } from "react-router-dom"

export const Users=()=>{
    


    return <div>
    {
        [1,2,3,4].map(id=>(
            <div key={id}>
            <Link to={`/users/${id}`} >User:{id}</Link>
        
          </div>
        ))
    }
    
    
    </div>
}