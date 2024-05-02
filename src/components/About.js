import {Outlet} from "react-router-dom"
import Profile from "./profileClass"
import { Component } from "react";

/*
const About=()=> {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the Namaste react course
      </p>
      <ProfileFunctionalComponent name={"Nikhil"}/>
      <Profile name={"Akshay"} xyz= {"Sry"}/>
    </div>
  )
}
*/

class About extends Component{
  constructor(props){
    super(props);
    console.log("Parent- Constructor")   //1st
  }
  componentDidMount(){
    //best place for API call bs its after render
    console.log('Parent- componentDIdMount')  //6th
  }
  render(){
    console.log('Parent- render')   //2nd  when it will render it will see at line 37 there is a component it will go to this component and its life cycle will continue 
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste react course
        </p>
        <Profile name={"Akshay"} xyz= {"Sry"}/>
      </div>
    )
  }
}

export default About