import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Details from '../Details/Details';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Doctors from '../Doctors/Doctors';
import Nurses from '../Nurses/Nurses';
import Error from '../Error/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path: "/doctors",
                element: <PrivateRoute><Doctors></Doctors></PrivateRoute>,
                loader: () => fetch('/doctor.json')
            },
            {
                path: "/nurses",
                element: <PrivateRoute><Nurses></Nurses></PrivateRoute>,
                loader: () => fetch('/nurse.json')
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/event.json')
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