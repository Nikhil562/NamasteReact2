import {Outlet} from "react-router-dom"
import Profile from "./profileClass"
const About=()=> {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the Namaste react course
      </p>
      <Profile/>
    </div>
  )
}

export default About