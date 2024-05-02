import { useState } from "react"
const Profile =(props)=>{
    const [count,setCount]= useState(0);
    const [count2,setCount2]=useState(0);
    return (
        <div>
            <h1>Profile Component :{props.name}</h1>
            <h2>Count:- {count}</h2>
            <h3>Count2:-{count2}</h3>
            <button onClick={()=>{
                setCount(1),
                setCount2(2);
            }}>count</button>
        </div>
    )
}

export default Profile