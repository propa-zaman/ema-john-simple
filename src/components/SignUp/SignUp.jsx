import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = (event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password !== confirm){
            setError('Password did not match');
        }
        else if (password.length<6){
            setError('Password must be 6 characters or more');
        }


    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='email' required />
            </div>

            <div className='form-control'>
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" placeholder='password' required />
            </div>
            <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" placeholder='confirm-password' required />
            </div>
            <input type="submit" className='btn-submit' value='Sign Up' />

        </form>
        <p><small>Already have an account? <Link to="/login">Login</Link> </small></p>
        <p className='text-error'><small>{error}</small></p>
    </div>
    );
};

export default SignUp;