import { useState } from "react";
const Title=()=>(
        // WHenever exporting like this always import in {}
        <a href="/">
        <img
        className="logo"
        alt="Image" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhCDV1Xj1jePbITftwhcH4-nBlX1aYx8DE0kw6zOE3bya4iTwv6AHN1111dml-VtufYw&usqp=CAU" >
                {/* Alt must be mention before src  */}
        </img>
        </a>


);
const Header = ()=>{

        const [isLoggedIn,setIsLoggedIn]=useState(false)
        return(
                <div className="header">
                <Title/>
                <div className="nav-items">
                <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                </ul>
                </div>
                {
                        // const a=10 this kind of js is not valid in jsx 
                        // only js expressions not statements
                        // console.log('I am expression')
                isLoggedIn?(
                <button onClick={()=>{
                        setIsLoggedIn(false)
                }}>Logout</button>
                ):(
                <button onClick={()=>{
                        setIsLoggedIn(true)
                }}>Login</button>

                )}
        
                </div>
        )
}
 
export default Header