import {Outlet} from "react-router-dom"
import Profile from "./profileClass"
import ProfileFunctionalComponent from './Profile'
const About=()=> {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the Namaste react course
      </p>
      <ProfileFunctionalComponent name={"Nikhil"}/>
      <Profile name={"Akshay"}/>
    </div>
  )
}

export default About