import { useContext } from 'react';
import userLogo from '../../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSingOut = () => {
        logOut();
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/career">Career</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-10 mr-3' src={userLogo} alt="" />
                {
                    user ?
                        <Link onClick={handleSingOut} to="/login" className="btn text-lg font-semibold">Sign Out</Link>
                        :
                        <Link to="/login" className="btn text-lg font-semibold">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;