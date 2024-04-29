import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
const Body =()=>{

  const [searchText,setSearchText]= useState("false");

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
        <h1>{searchText}</h1>
        <button 
        className="search-btn"
        onClick={()=>{
          if(searchText==="true") setSearchText("false");
          else setSearchText("true")
        }}
        >Search</button>
        </div>        
    <div className="restaurant-list">
          {
            restaurantList.map((restaurant) =>{
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