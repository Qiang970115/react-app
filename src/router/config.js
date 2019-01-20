import Home from 'view/home'
import City from 'view/home/city'
import Use from "view/home/use"

export default [{
    path: "/home",
    component: Home,
    children:[
        {
            path: "/home/city",
            component: City
        },{
            path: "/home/use",
            component: Use
        },
        
    ]
} ]