import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import {   adminPaths } from "./admin.routes";
import { routesGenerate } from "../utils/routesGenerate";
import { facultyPath } from "./faculty.routes";
const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
    },
    {
        path: '/admin',
        element: <App />,
        children:routesGenerate(adminPaths)
    },
    {
        path: '/student',
        element: <App />,
        children: routesGenerate(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routesGenerate(facultyPath)
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/resister',
        element: <Register />
    },

])

export default router