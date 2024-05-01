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
                        <li>Home</li>
                        {/* <a href="/about">
                        <li>About</li>    It will reload the page 
                        </a> */}
                        <Link to="/about">
                        <li>About</li>  /{/* Now its now reloading
                                         But Our header and footer not appearing */ 
                                        }
                        </Link>
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