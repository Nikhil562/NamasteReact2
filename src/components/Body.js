import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
const Body =()=>{

  let searchTxt = "KFC";

  const [searchText,setSearchText]= useState("KFC");//to create state variables  , it returns a array and the first el of arr is variale name here KFC is default value 
  // A Hook is just a fun 

  //searchText-> variabe name
  // setSearchText->method to update it 

  // searchTxt=e.target.value;  //can not modify vaibles using usestate like this 


   
    return   (    
    <>
      <div className="search-container">
        <input type="text"
         className="search-input"
         placeholder="Search"
        //  value={searchTxt}  //useless
        value={searchText}
         onChange={(e)=>{
          // e-> Event 
          console.log("On CHnaging stg on search I will be printed")
          console.log(e.target.value)
          // On writing stg on input KFC+input will be printed 

          searchTxt=e.target.value;  //can not modify vaibles using usestate like this 

          // It also wont work bs local variable (searchTxt) is not preferref in react make a react variable 
          /*{
            Every component in react maintains a state and u variables into a state and every time u create a local varibale u use useState hook in react  
          }*/

          setSearchText(e.target.value)   //Modified successfully 
          // e.target.value => whatever  u write in input
          }

          
        }
         />
         <button className="search-btn">Search-{searchText}</button>
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

// [searchText,setSearchText]-> 
// every time we set it gets updates so 2 way binding 