import React from "react";
import "../styles/listuser.css";

export default function ListUser({details}){
    return(
    <div className="">
        <div style={{textAlign:"center"}}></div>
        <div className="m-5">
            <h5>Name :{details.name}</h5>
            <h5>Department :{details.department}</h5>
            <h5>Mobile Number :{details.number}</h5>
            <h5>Email :{details.email}</h5>
            <h5>Password :{details.password}</h5>
        </div>
    </div>
)}