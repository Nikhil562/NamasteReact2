import { useState, useEffect } from "react";


const useRestaurant =(resId)=>{
const [restaurant,setRestaurant]= useState(null);


useEffect( ()=>{
    getRestaurantInfo();
},[]);
async function getRestaurantInfo(){
    const data =await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+resId)

const json = await data.json();
console.log(json);
setRestaurant(json.data);  //will be updated whenever data is fetched from API 
}

return restaurant;
}
export default useRestaurant;


//so a hook is just a normal fun we use it to export some logic into that fun 