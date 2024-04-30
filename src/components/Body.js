import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState ,useEffect} from "react";
import Shimmer from './Shimmer'
function filterData(searchText,restaurants){
  // If searched text :- BurgerKing if will give all related restaurants 
  const filterData = restaurants?.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
  )
  return filterData
}
const Body =()=>{
  const [restaurants,setRestaurants] = useState(restaurantList); 
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
  setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }


  //conditional rendering 
  /*
  if restruant is empty is shoudl load shimmer UI
  if restaurant has data it should load actual data UI
  **/
  return (
    restaurants?.length === 0 ? (
      <Shimmer />
    ) : (
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

        const data = filterData(searchText, restaurants)
        setRestaurants(data);
        }}
        >Search</button>
        </div>        
        <div className="restaurant-list">
        {restaurants?.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
    )
  )
    
}
export default Body
