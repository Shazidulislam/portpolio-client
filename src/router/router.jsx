import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";

const router = createBrowserRouter([
    {
        path:"",
        element:<RootLayout></RootLayout>,
    }
])

export default router;