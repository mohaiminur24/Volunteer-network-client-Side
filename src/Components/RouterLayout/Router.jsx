import { createBrowserRouter } from "react-router-dom";
import HomePage from "../PageLayout/HomePage";
import LoginPage from "../PageLayout/LoginPage";
import Registration from "../PageLayout/Registration";

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
    }
]);


export default router;