import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);

    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
       

        signIn(email,password)
        .then((result) => {
            // Signed in 
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            console.log(errorCode);
          });
        


    }


    
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required />
                </div>

                <div className='form-control'>
                    <label htmlFor="password" className='form-control label '>Password</label>
                    <input type={ show ? "text" : "password"} name="password" placeholder='password' required />
                    <p><small onClick={() => setShow(!show)}>
                        {
                            show ? <span>Hide password</span> : <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input type="submit" className='btn-submit' value='Login' />

            </form>
            <p><small>New to Ema-Jhon? <Link to="/signup">Create new account</Link> </small></p>
            <p className='text-error'><small>{error}</small></p>
        </div>
    );
};

export default Login;