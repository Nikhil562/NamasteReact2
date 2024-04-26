import { backdropClasses, buttonGroupClasses, imageListClasses } from "@mui/material";
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

const burgerKing = {
        name: "Burger King",
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_248022.JPG",
        cusines : ["Burger","American"],
        rating: "4.3"
}
const RestrauntCard = () =>{
        return (
                <div className="card">
                        <img src={burgerKing.image} alt="" />
                        <h2>{burgerKing.name}</h2>
                        <h13>{burgerKing.cusines.join(',')}</h13>
                        <h4>{burgerKing.rating} Stars </h4>
                </div>
        );
        // can skip return () also 
};

const Body =()=>{
        return (
            <div>
                <RestrauntCard/>
            </div>
        )
}
const Footer = ()=>{
    return (
        <h4>Footer</h4>
    )
}
/**
1) Header
- Logo  (Title)
- Nav Items(right side)
- Cart
2) Body
- Search bar
- Restaurants List
    - Restaurant card
        - Image
        - Name
        - Rating
3) Footer
- Links
- Copyrights

*/
const AppLayout = () =>{
    return (
        <>
        <HeaderComponent/>
        <Body/>
        <Footer/>
        </>

    );
};


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)