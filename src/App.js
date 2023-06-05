import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ListUser from "./Components/ListUser";
import CreateUser from "./Components/CreateUser";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/users" Component={ListUser}/>
        <Route path="/create-user" Component={CreateUser}/>
     </Routes>
    </div>
  );
}

export default App;
