import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState ,useEffect} from "react";
import Shimmer from './Shimmer'
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { backdropClasses } from "@mui/material";
const Body =()=>{
  const [allrestaurants,setAllRestaurants]=useState([])
  const [filteredRestaurants,setFilteredRestaurants] = useState([]); 
  const [searchText,setSearchText]= useState("");
  useEffect(
    ()=>{
  getRestaurants(); 
    },[]
  )
  async function getRestaurants(){
    const data= await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);//first time I want to show all restaurants
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);//then filtered restaurants

  }
const isOnline =useOnline();
if(!isOnline){
    return <h1>🔴Offline , Please check your internet connection</h1>
}

  if(!allrestaurants) return null
  // if(filteredRestaurants.length===0) return <h1>No Restaurant match your filter</h1> 

  const searchBtnCSS={
    backgroundColor:'red'
  } //Inline CSS 
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
        style={searchBtnCSS}
        // className="search-btn"   //External CSS 
        onClick={()=>{

        const data = filterData(searchText, allrestaurants)
        setFilteredRestaurants(data);
        }}
        >Search</button>
        </div>        
        <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
    )
  
    
}
export default Body


//Diff types of CSS methods:-

/**
 Normal Native CSS
 SCSS
 InLine CSS
 Component Libraries - MUI , Base UI , Chakra UI , Ant
 Tailwind CSS Framework
 Styled Components
 */