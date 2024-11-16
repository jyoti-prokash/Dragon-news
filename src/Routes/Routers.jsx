import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Error from "../Components/Error";
import News from "../Components/Pages/News";

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
        path: "/news",
        element: <h2>news</h2>
    }
]);

export default router;