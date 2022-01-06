import { useParams } from "react-router-dom";

export const Userdetails=()=>{

const {id}=useParams()


return <div>
    user fetching data {id}
</div>


}

