import { createBrowserRouter } from "react-router-dom";
import HomePage from "../PageLayout/HomePage";
import LoginPage from "../PageLayout/LoginPage";
import Registration from "../PageLayout/Registration";
import EventPage from "../PageLayout/EventPage";
import Dashboard from "../PageLayout/Dashboard";
import RegisterPage from "../PageLayout/RegisterPage";
import Addeventpage from "../PageLayout/Addeventpage";
import PrivateRoute from "../AuthContextLayout/PrivateRoute";
import ErrorLayout from "../ShareableComponent/ErrorLayout";

const router = createBrowserRouter([
    {
        errorElement: <ErrorLayout/>
    },
    {
        path:"/",
        element:<HomePage/>,
    },
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        path:"/registration",
        element: <Registration/>
    },
    {
        path:"/event",
        element: <PrivateRoute><EventPage/></PrivateRoute>,
        children:([
            {
                path:"/event",
                element: <Dashboard/>
                
            },
            {
                path: "/event/volunteerlist",
                element: <RegisterPage/>

            },
            {
                path:"/event/addevent",
                element: <Addeventpage/>
            }
        ])
    }
]);


export default router;