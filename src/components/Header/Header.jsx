import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const handleLogOut = ()=>{
        logOut()
        .then(result =>{})
        .catch(error =>{
            console.log(error.message);
        })
    }

    const {user, logOut} = useContext(AuthContext);
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
                user && <span className='text-white'>{user.email} <button className='btn-logout' onClick={handleLogOut}>Log Out</button></span>
            }
            </div>
        </nav>
    );
};

export default Header;