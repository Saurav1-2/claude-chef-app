import {useState} from "react"

export default function State()
{
   const isGoingOut = false

   const [status,setStatus] = useState(false)

   

   function handleClick()
   {
    setStatus(prev=>!prev)
   }
    
    return(
        <main>
            <h1 className="title">Is state important to konw?</h1>
            <button onClick={handleClick} className="value">{status?"Yes":"No"}</button>
        </main>
    )
}