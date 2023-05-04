import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");


    const login = (e) => {
        e.preventDefault();
        axios.post("https://localhost:3001/login", {
          email: email,
          password: password,
        }).then((response) => {
          if(response.data.message){
            setLoginStatus(response.data.message);
          }else{
            setLoginStatus(response.data[0].email);
          }
        })
      }


      const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2 className='d-flex justify-content-center'>Sign-in</h2>
                <form action=''>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input className='form-control rounded-0' type="email" name="email" onChange={(e) => 
                            {setEmail(e.target.value)}} placeholder="Enter your email" required />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input className='form-control rounded-0' type="password" name="password" onChange={(e) => 
                            {setPassword(e.target.value)}} placeholder="Enter your Password" required />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>

                    <input className="button btn btn-warning w-100" type="submit" onClick={login} value="Login" />
                    <button type='submit' className='btn btn-success w-100' onClick={login}>Log in</button>
                    {/* <p>You are agree to aour terms and policies</p> */}
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
                </form>
            </div>
        </div>
    )
}


export default Login;