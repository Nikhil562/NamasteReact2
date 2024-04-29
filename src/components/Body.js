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
  const [restaurants,setRestuarants] = useState(restaurantList); 
  const [searchText,setSearchText]= useState("");

  //fetch() //this place is not a good place to all api bs on every key press it will do UI rerender 
  //we want :- As page loads call an API fill the data 

  // 2 cases can be possible :-

  // 1)user loads ->API call (300 milli sec) -> render page (200ms) => total 500ms  (page will be available after 500ms)
  // 2)user loads ->render the initial page ->API call->update the UI (page will be available after 100ms (lets say after loading rendering takes 100ms))
  // so we will use useEffect

  useEffect(
    ()=>{

    }
  )
  // whenever useeffect want to call the callback fun inside it useeffect will call
 //component rerenders 2 times :- 
 /*
 1) state changes
 2) props changes


 After every rerender this useeffect will be called but we dont want to call it after every rerender 
 so
 we provide a deprendency array 

  useEffect(
    ()=>{

    },[]   -> if its not dependent on etg it will be called just once (After initial render)
  )

  lets say I only want to call it only when searchText changes  so write it in depen arr 

  useEffect(
    ()=>{

    },[searchText] 
  )

  so API call will be there inside useEffect it will rerender the component

  */
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