import { useState, useEffect } from "react";
import {FETCH_MENU_URL} from '../constants'

const useRestaurant =(resId)=>{

const [restaurant,setRestaurant]= useState(null);

useEffect( ()=>{
    getRestaurantInfo();
},[]);
async function getRestaurantInfo(){
    const data =await fetch(FETCH_MENU_URL+resId)
    const json = await data.json();
    setRestaurant(json.data); 
}

return restaurant;
}


export default useRestaurant;


//so a hook is just a normal fun we use it to export some logic into that fun 