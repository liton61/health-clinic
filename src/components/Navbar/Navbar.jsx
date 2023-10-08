import { useContext } from 'react';
import userLogo from '../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import logo from '../../../public/logo.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSingOut = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img className='w-20' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink></li>
                </ul>
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li><NavLink
                        to="/mentors"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Mentors
                    </NavLink></li>
                </ul>
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li><NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Register
                    </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex'>
                            <img className='w-12 mr-3' src={userLogo} alt="" />
                            <Link onClick={handleSingOut} to="/login" className="btn btn-active btn-neutral text-lg">Sign Out</Link>
                        </div>
                        :
                        <Link to="/login" className="btn btn-active btn-neutral text-lg">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;