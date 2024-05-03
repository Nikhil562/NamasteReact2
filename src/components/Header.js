import { useState } from "react";
import Logo from '../assets/img/FoodVillaImg.webp'
import { Link } from "react-router-dom";

const Title=()=>(
        // WHenever exporting like this always import in {}
        <a href="/">
        <img
        className="logo"
        alt="logo" 
        src= {Logo}/>
                {/* Alt must be mention before src  */}
      
        </a>


);
const Header = ()=>{

        const [isLoggedIn,setIsLoggedIn]=useState(false)
       
        return(
                <div className="header">
                <Title/>
                <div className="nav-items">
                <ul>
                        <Link to="/">
                        <li>Home</li> 
                        </Link>
                        <Link to="/about">
                        <li>About</li> 
                        </Link>
                        <Link to="/contact">
                        <li>Contact</li> 
                        </Link>
                        <li>Cart</li>
                        <Link to="/instamart">
                        <li>Instamart</li> 
                        </Link>
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