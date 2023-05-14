import { createBrowserRouter } from "react-router-dom";
import HomePage from "../PageLayout/HomePage/HomePage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    }
]);


export default router;