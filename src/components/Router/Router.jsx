import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Details from '../Details/Details';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Mentors from '../Mentors/Mentors';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path:"/mentors",
                element:<Mentors></Mentors>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader:() => fetch('/event.json')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;