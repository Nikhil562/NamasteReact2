import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";


function filterData(searchText,restaurants){
  // If searched text :- BurgerKing if will give all related restaurants 
  const filterData = restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
  )
  return filterData
}
const Body =()=>{
  const [restaurants,setRestuarants] = useState(restaurantList); 
  const [searchText,setSearchText]= useState("");

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