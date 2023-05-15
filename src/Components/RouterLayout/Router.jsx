import { createBrowserRouter } from "react-router-dom";
import HomePage from "../PageLayout/HomePage";
import LoginPage from "../PageLayout/LoginPage";
import Registration from "../PageLayout/Registration";
import EventPage from "../PageLayout/EventPage";
import Dashboard from "../PageLayout/Dashboard";
import RegisterPage from "../PageLayout/RegisterPage";
import Addeventpage from "../PageLayout/Addeventpage";

const router = createBrowserRouter([
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
        element: <EventPage/>,
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