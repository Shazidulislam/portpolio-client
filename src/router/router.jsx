import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import ProjectDeatils from "../page/ProjectDeatils/ProjectDeatils";
import SubRootLayout from "../page/SubRootLayout/SubRootLayout";

const router = createBrowserRouter([
    {
        path:"",
        element:<RootLayout></RootLayout>,
       
    },
    {
        path:"/subRoot",
        element:<SubRootLayout></SubRootLayout>,
        children:[
            {
                path:"/subRoot/project/:id",
                Component:ProjectDeatils,
            }
        ]
    }
])

export default router;