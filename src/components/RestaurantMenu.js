import { useEffect } from "react";
import { useParams } from "react-router-dom"

const RestaurantMenu =()=>{
    //to read a dynamic URL params 
    const params =useParams();

    useEffect( ()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data =await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="
    );

    const json = await data.json();
    console.log(json);
}

    const {id}=params;
    return (
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>namaste</h2>
        </div>
    )
}
export default RestaurantMenu