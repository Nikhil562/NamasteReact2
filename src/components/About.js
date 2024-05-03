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
        <Profile name={"First Child"} xyz= {"Sry"}/>
        <Profile name={"Second CHild"} xyz= {"Sry"}/>

      </div>
    )
  }
}

export default About

/*

Parent Constructor
Parent render
    -First Child - Constructor
    -First Child - render
    -second Child -constrctor
    -second child -render
    -FIrst Child -componentDIdMount
    -second child- componentDidMount
parent-componentDidMount


When react renders it renders in 2 phases :- 
 render phase and commit phase 
 first render phase is finished 

 render phase :-  constructor and render method is called in this phase
 after then react actually updates the DOM then 
  
 commit phase :- place where react is modifying the dom 

 componentDidMount is done after we updated the DOM (initial render)

 when there are 2 children react tries to batch up the render phase 
   Parent constructor 
   Parent render 
        FIrst CHild constrcutor
        FIrst Child render

        Now we have finised 1st phase react says we have more children let me finish the render phase for everyone I will commit it again 
        Bs If one of the children started API call in commit phase  then it will delay the render phase for the second time 

        Second Child construcotr
        Second Child render

    First Child componentDIdMount
    Second Child componentDidMount
    Parent componentDidMount
    
*/