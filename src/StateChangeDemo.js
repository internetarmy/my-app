import React from "react";

class StateChangeDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.clickEvent = this.clickEvent.bind(this);
    }
    clickEvent(){
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickEvent}>Click here</button>
            </div>
        )
    }
}

export default StateChangeDemo;