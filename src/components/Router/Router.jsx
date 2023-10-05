import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Home/Home';
import About from '../About/About';
import Career from '../Career/Career';
import Login from '../Login/Login';
import Register from '../Register/Register';
import News from '../News/News';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('news.json')
            },
            {
                path: "/news/:id",
                element: <News></News>
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/career",
                element: <Career></Career>
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