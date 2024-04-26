import { backdropClasses, buttonGroupClasses } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
// import FoodFireLogo from "../Images/Food Fire Logo.png";

const Title=()=>(
        <a href="/">
        <img
        className="logo"
        alt="Image" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhCDV1Xj1jePbITftwhcH4-nBlX1aYx8DE0kw6zOE3bya4iTwv6AHN1111dml-VtufYw&usqp=CAU" >
                {/* Alt must be mention before src  */}
        </img>
        </a>


);
const HeaderComponent=()=>{
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
                </div>
        )
}

const Body =()=>{
        return (
            <h4>Body</h4>
        )
}
const Footer = ()=>{
    return (
        <h4>Footer</h4>
    )
}

// const AppLayout = () =>{
//     return (
//         /*<Header/>
//         <Body/>
//         <Footer/>
        // Will Throw Error bs JSX must hv only 1 parent el
        // So we can put inside div but in skeleton div inside div dont look good  , I dont want a div inside my root so React.fragment caan be used 
        // its a Component of react which can be used like <React.Fragment> code </React.Fragment>  
        // Its like an empty tag 
        // but it look ugly so <> </> can be used 
        
        // How to give inline css in JSX 

        

//     );
// };

const styleObj={
        backgroundColor:"red"
}
//<div style={{ backgroundColor: 'red' }}>
// The outer braces tell JSX that you're inserting a JavaScript expression, and the inner braces create an object

const jsx = (
        <div style={styleObj}> 
        {/* It acceps a js only thats why even my comment got {} */}
        <h1>JSX</h1>
        <h3>Hi Nikhil</h3>
        </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx)