import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([

    {
        path: '/home',
        element: <App />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
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