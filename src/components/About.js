import {Outlet} from "react-router-dom"
const About=()=> {
  return (
    <div>About
    <Outlet/>
    {/* Or we could do <Profile/> */}
    </div>
  )
}

export default About