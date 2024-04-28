import { backdropClasses, buttonGroupClasses, imageListClasses } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
// import FoodFireLogo from "../Images/Food Fire Logo.png";

export const Title=()=>(
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
export const  Header = ()=>{
        return(
                <div className="header">
                
                <div className="nav-items">
                <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                </ul>
                </div>
                </div>
        )
}
