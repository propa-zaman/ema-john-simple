import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <Link to="/">Order</Link>
            <Link to="/orders">Order Review</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            {
                user && <span >{user.displayName}</span>
            }
            </div>
        </nav>
    );
};

export default Header;