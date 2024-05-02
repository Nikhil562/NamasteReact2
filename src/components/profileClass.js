import React from "react";

class Profile extends React.Component{
    // u can not create a class based component without render method which returns some JSX 
    render(){
    return (
        <div>
        <h1>{this.props.name}</h1>
        </div>
    )
}

}
export default Profile;