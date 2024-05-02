import { useState } from "react"
const Profile =(props)=>{
    const [count]= useState(0);
    return (
        <div>
            <h1>Profile Component :{props.name}</h1>
            <h2>Count:- {count}</h2>
        </div>
    )
}

export default Profile