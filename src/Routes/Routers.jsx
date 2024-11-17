import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Components/Error";
import News from "../Components/Pages/News";
import Authlayout from "../Components/AuthLayout/Authlayout";
import Login from "../Components/AuthLayout/Login";
import Register from "../Components/AuthLayout/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "",
                element: <Navigate to="/category/01"></Navigate>
            },
            {
                path: "/category/:id",
                element: <News></News>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/auth",
        element: <Authlayout></Authlayout>,
        children:[
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;