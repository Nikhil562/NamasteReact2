import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState ,useEffect} from "react";

function filterData(searchText,restaurants){
  // If searched text :- BurgerKing if will give all related restaurants 
  const filterData = restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
  )
  return filterData
}
const Body =()=>{
  const [restaurants,setRestuarants] = useState(restaurantList); //Now I dont need this restrauntlist now , now we will push new data from json into  restraunts 
  const [searchText,setSearchText]= useState("");

//API calls in useeffect  once after u render 
// loads -> render -> API call(useeffect) ->rerender 
  useEffect(
    ()=>{
getRestaurants();  ///but browser will restrict , it says when u r trying to talk to swiggy.com from localhost we can not let u do this like this so install a plugin CORS

    },[]
  )
  async function getRestaurants(){
    const data= await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
  // const [restaurants,setRestuarants] = useState(restaurantList); //Now I dont need this restrauntlist now , now we will push new data from json into  restraunts 
  setRestuarants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-container">
        <input type="text"
         className="search-input"
         placeholder="Search"
         value={searchText}
         onChange={(e)=>{
          setSearchText(e.target.value)  
          }
        }
        />
        <button 
        className="search-btn"
        onClick={()=>{
        //Need to filter the data 
        // update the state - results 

        const data = filterData(searchText, restaurants)
        setRestuarants(data);
        }}
        >Search</button>
        </div>        
    <div className="restaurant-list">
          {
            restaurants.map((restaurant) =>{
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />

          })}
 

        </div>
      </>
    )
    
}
export default Body
/*
Que :- If we had local variables why we need this state variable 

If someone updated my local variable I wont know React has no idea of this 

in   const [searchText,setSearchText]= useState("KFC"); //react is watching these varibales  
*/