import React from "react";
import { Component } from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
              name:"Dummy Name",
              location:"Dummy Location"
            }
          }
        console.log('child constructor'+this.props.name)   
    }
    async componentDidMount(){
      // Called after first render
        const data= await fetch("https://api.github.com/users/Nikhil562")
        const json = await data.json()
        console.log(json);
        this.setState({
          userInfo: json
        })
        console.log('child-componentDIdMount'+this.props.name)  
    }

    componentDidUpdate(){
      // After every next render 
      console.log('cdidupdate')

    }
    componentWillUnmount(){
      console.log('UNmount')
    }
    render(){

        console.log('child render'+this.props.name)   
    return (
        <div>
        <h1>Name:-{this.state.userInfo.name}</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Location:- {this.state.userInfo.location}</h2>

    
        </div>
    )
}

}
export default Profile;

/*
Parent Constructor
Parent render
child constructor
child render
DOM is updated
json is locked in console 
// Render Phase

child cdm  (but it will wait for data to be fetched and meanwhile it will print the parent cdm)
parent cdm

// so the original order will be 
see image 190

also it will stop at parent cdm
we made an API call we got the data we did a setState it will trigger next render
so it will render it once again  so 
child - render FIrst Child will be printed 

this rerender cycle is known as updating

so component already has mounted we just hv to update it

when we update a component it will render , update the DOM and trigger another method cDidupdate


When a components destroys it called componentWillUnmount
When I go to someothe page ex:- contact page will will be printed 

*/


/*
Why Hooks :-
Modularity , Reusability , Readability 
*/