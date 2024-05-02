import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
    return (
        <div>
        <h1>Name:-{this.props.name}</h1>
        <h2>XYZ:- {this.props.xyz}</h2>
        <h3>count:-{this.state.count}</h3>
        </div>
    )
}

}
export default Profile;