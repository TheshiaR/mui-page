import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element:<Signup/>
            },
            {
                path: "/login",
                element:<Login/>
            },
        ]
    }
])

export default router
