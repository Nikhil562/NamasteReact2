import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
const Body =()=>{
    return   (    
    <>
      <div className="search-container">
        <input type="text"
         className="search-input"
         value=""/>
         <button className="search-btn">Search</button>
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