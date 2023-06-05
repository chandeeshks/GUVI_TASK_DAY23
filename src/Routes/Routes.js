import CreateUser from "../Components/CreateUser";
import Dashboard from "../Components/Dashboard";
import ListUser from "../Components/ListUser";


let routes=[
    {
        name:"Dashboard",
        path:"/",
        component:Dashboard
    },
    {
        name:"Listuser",
        path:"/users",
        component: ListUser
    },
    {
        name:"Createuser",
        path:"/create-user",
        component: CreateUser
    }
]

export default routes;