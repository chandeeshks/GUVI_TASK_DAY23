import React from "react";
import "../styles/createuser.css";
import ListUser from "./ListUser";

export default function CreateUser(){
    const data = [{
        name:"Chandeesh",
        department:"ECE",
        college:"PSG college of Technology",
        number:"9789159123",
        email:"123@gmail.com",
        password:"0001",
    },{
        name:"Bharath",
        department:"EEE",
        college:"PSG college of Technology",
        number:"9823475601",
        email:"345@gmail.com",
        password:"0002",
    },{
        name:"Harshan",
        department:"CSE",
        college:"PSG college of Technology",
        number:"8369541758",
        email:"789@gmail.com",
        password:"0078",
    }]
    return(
    <div className="box container mt-5">
        <div style={{textAlign:"center"}}>Create User</div><br></br>
        <div class="mb-3 row">
            <label for="inputname" class="col-sm-2 col-form-label">Enter Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputname"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputdepartment" class="col-sm-2 col-form-label">Department</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputdepartment"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputcollege" class="col-sm-2 col-form-label">College</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputcollege"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputphonenumber" class="col-sm-2 col-form-label">Phone Number</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputphonenumber"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputemail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputemail"/>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword"/>
            </div>
        </div>
        <div className="mb-3">
           <div style={{textAlign:"center"}}>
           <button type="button" class="btn btn-primary">Submit</button>    
           </div>
        </div>
        <div>
           {
            data.map((d,i)=>(
                <ListUser key={`Details-${i}`} details={d}/>
            ))
           }
        </div>
    </div>
    )
}