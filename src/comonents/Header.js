import React from "react";
import "./header.css";

function Header(){
    // const date = new Date(2021,4,16,20);
    // var message = "";
    // var hours = date.getHours();
    // console.log(date);
    // console.log(hours)
    // const style = {
    //     // color:"#ff000080",
    //     // "backgroundColor":"##00ff00"
    //     fontSize : "30"
        
    // }
    // if(hours<12){
    //     message = "Good Morning";
    //     style.color = "#ff000080";
    // } else if(hours >=12 && hours <=16){
    //     message = "Good AfterNoon";
    //     style.color = "#00ff0080";
    // } else if(hours >= 16 && hours <=18){
    //     message = "Good Evening"
    //     style.color = "#0000ff80";
    // } else if(hours>18 ){
    //     message = "Good Night"
    // }
    
    // var fname = "Siva Sankar";
    // var lname = "Mullu";
    return (
        <div>
            {/* <h1>Hi {fname +" "+ lname}</h1>
            <header style = {style}>{ message}</header> */}
            <h1>This is For Header</h1>
        </div>
        
    )
}

export default Header