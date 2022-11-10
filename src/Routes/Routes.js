import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import ErrorHandle from "../Pages/ErrorHandle/ErrorHandle";
import Category from "../Pages/Home/Category/Caregory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router =  createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/myreview',
                element:<PrivateRoutes>
                    <MyReview></MyReview>
                </PrivateRoutes>
            },
            {
                path:'/addservice',
                element:<PrivateRoutes>
                    <AddService></AddService>
                </PrivateRoutes>
            },
            {
                path:'/services',
                element:<Category></Category>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://helping-network-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/*',
                element:<ErrorHandle></ErrorHandle>
            }
        ]
    }
])

export default router;