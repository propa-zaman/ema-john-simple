import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>

                <div className='form-control'>
                    <label htmlFor="password" className='form-control label '>Password</label>
                    <input type="password" name="password" placeholder='password' required />
                </div>
                <input type="submit" className='btn-submit' value='Login' />

            </form>
            <p><small>New to Ema-Jhon? <Link to="/signup">Create new account</Link> </small></p>
        </div>
    );
};

export default Login;