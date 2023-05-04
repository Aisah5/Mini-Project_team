import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        storename: ''
    })

    const navigate = useNavigate();
    

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    // const handleSubmit =(event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    //     if(errors.username === "" && errors.email === "" && errors.password === ""
    //     && errors.phone === "" && errors.storename === "") {
    //         axios.post('http://locahost:3001/signup', values)
    //         .then(res => {
    //             navigate('/');
                
    //         })
    //         .catch(err => console.log(err));
    //     }
    // }

    const handleSubmit = (event) => {        
        event.preventDefault();        
        // const err = Validation(values); setErrors(err);         
        // if(err.username === "" && err.email === "" && err.password === "" && err.phone === "" && err.storename === "") 
        // {            
            axios.post('//localhost:3001/signup', values)            
            .then(res => {
                console.log(res);                
                navigate('/')         
            })    
            // .then(res => console.log(res))            
            .catch(err => console.log(err))   
        
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2 className='d-flex justify-content-center'>REGISTER</h2>
                <form action='' onSubmit={handleSubmit}>
                  <div className='mb-3'>
                      <label htmlFor='username'><strong>Username</strong></label>
                      <input type='text' placeholder='Masukan Username' 
                      name='username' onChange={handleInput} className='form-control rounded-0'></input>
                      {/* {err.username && <span className='text-danger'> {err.username}</span>} */}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='email'><strong>Email</strong></label>
                      <input type='email' placeholder='Masukan Email'
                      name='email' onChange={handleInput} className='form-control rounded-0'></input>
                      {/* {err.email && <span className='text-danger'> {err.email}</span>} */}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='password'><strong>Password</strong></label>
                      <input type='password' placeholder='Masukan Password'
                      name='password' onChange={handleInput} className='form-control rounded-0'></input>
                      {/* {err.password && <span className='text-danger'> {err.password}</span>} */}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='phone'><strong>Telepon</strong></label>
                      <input type='text' placeholder='Masukan Nomor Telepon' 
                      name='phone' onChange={handleInput} className='form-control rounded-0'></input>
                      {/* {err.phone && <span className='text-danger'> {err.phone}</span>} */}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='storename'><strong>Nama Toko</strong></label>
                      <input type='text' placeholder='Masukan nama Toko' 
                      name='storename' onChange={handleInput} className='form-control rounded-0'></input>
                      {/* {err.storename && <span className='text-danger'> {err.storename}</span>} */}
                  </div>

              
                    
                  <button type='submit' onSubmit={handleSubmit} className='btn btn-success w-100'>Create Account</button>
                  <p></p> 
                  <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}


export default Signup;