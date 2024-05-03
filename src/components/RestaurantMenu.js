import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom"
import {IMG_CDN_URL} from '../constants'
import useRestaurant from "../utils/userRestaurant";
import Shimmer from "./Shimmer";
//lets create a Hook (custom) which will get restraunt details for us 
//always use use keyword before , we r creating in utils


const RestaurantMenu =()=>{
    //to read a dynamic URL params 
    const params =useParams();
    const {id}=params;

    const restaurant = useRestaurant(id);

    return !restaurant?(
        <Shimmer/>
    ):(
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