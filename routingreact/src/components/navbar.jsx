import { Link } from "react-router-dom"

export const Navbar=()=>{
 
    return <div style={{display:"flex"}}>
    <div>
    <Link to={"/"}>Home</Link>
    </div>
    <div>
    <Link to={"/about"}>About</Link>
    </div>
    <div>
    <Link to={"/contact"}>Contact</Link>
    </div>  

    <div>
    <Link to={"/products"}>Products</Link>
    </div> 
    

    

    </div>
}