import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom"
import {IMG_CDN_URL} from '../constants'

const RestaurantMenu =()=>{
    //to read a dynamic URL params 
    const params =useParams();

    const [restaurant,setRestaurant] =useState({});


    useEffect( ()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data =await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229")
    
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
}

    const {id}=params;
    return (
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} alt="" />
            <h1>Menu</h1>
            {
                Object.values(restaurant?.menu?.items).map((item)=>{
                    <li key={item.id}>{item.name}</li>
                })
            }
        </div>
    )
}
export default RestaurantMenu