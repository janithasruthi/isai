import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './../Layout/Layout';
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Forgotpassword from "../forgotpassword/Forgotpassword";
import Profilecontainer from "../profile/Profilecontainer";
import Myaccount from "../profile/Myaccount";
import Addprofile from "../profile/Addprofile";
import Updateprofilephoto from "../profile/Updateprofilephoto";
import Admincontainer from "../admin/Admincontainer";
import AddAlbum from "../admin/AddAlbum";
import AddSongs from "../admin/AddSongs";

let myRoutes=createBrowserRouter([
    {
       path:"/" ,
       element:<Layout/>,
       children:[
        {
        path:"/Home",
        element:<Home/>
        },
    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"/Register",
        element:<Register/>
    },
     {
        path:"/Forgotpassword",
        element:<Forgotpassword/>
     },
{
    path:"/profile",
    element:<Profilecontainer/>,
    children:[
        {
        index:true,
        element:<Myaccount/>
    },
    {
        path:"addprofile",
        element:<Addprofile/>
    },
    {
        path:"updateprofilephoto",
        element:<Updateprofilephoto/>
    }
]},
    {
        path:"/admin",
        element:<Admincontainer/>,
        children:[
            {
                path:"/admin/addAlbum",
                element:<AddAlbum/>
            },
            {
              path:"/admin/addSong",
              element:<AddSongs/>
            }

        ]
    },
    ]}
   

    
])
export default myRoutes;