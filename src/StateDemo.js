import React from "react";

class StateDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "Siva",
            age : 20,
            isLoggedIn : false
        }
    }
    render(){
        var message = "";
        if(this.state.isLoggedIn){
            message = "In";
        } else {
            message = "Out";
        }
        return (
            <div>
                <p>Hi every one this is {this.state.name}. I'm here to describe a state concept in react</p>
                <p>And my age is {this.state.age}</p>
                <p>Your are currently Logged {message}</p>
            </div>
        );
    }
}
export default StateDemo