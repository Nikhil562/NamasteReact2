import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        }
        console.log('child constructor')   //3rd
    }
    componentDidMount(){
        console.log('child-componentDIdMount')  //5th
    }
    render(){
        const {count}=this.state;
        console.log('child render')   //4th
    return (
        <div>
        <h1>Name:-{this.props.name}</h1>
        <h2>XYZ:- {this.props.xyz}</h2>
        <h3>count:-{this.state.count}</h3>
        <h3>Count:-{this.state.count2}</h3>
        <button onClick={()=>{
            this.setState({
                count:1,
                count2:2
            })
        }}>SetCount</button>
        </div>
    )
}

}
export default Profile;