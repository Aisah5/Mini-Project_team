import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
// import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [storename, setStorename] = useState("");
  const [signupStatus, setSignupStatus ] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios.post("https://localhost:3001/signup", {
      username: username,
      email: email,
      password: password,
      phone: phone,
      storename: storename,
    }).then((response) => {
      // setSignupStatus(response);
      // console.log(response);
      if(response.data.message){
        setSignupStatus(response.data.message);
      }else{
        setSignupStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

    // const navigate = useNavigate();
    const [errors] = useState({})

    // const handleInput = (event) => {
    //     setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    // }

    // const handleSubmit =(event) => {
    //     event.preventDefault();
    //     setErrors(Validation(values));
    //     if(errors.username === "" && errors.email === "" && errors.password === ""
    //     && errors.phone === "" && errors.storename === "") {
    //         axios.post('http://locahost:8081/signup', values)
    //         .then(res => {
    //             navigate('/');
                
    //         })
    //         .catch(err => console.log(err));
    //     }
    // }

//     const handleSubmit = (event) => {        
//         event.preventDefault();        
//         const err = Validation(values); setErrors(err);         
//         if(err.username === "" && err.email === "" && err.password === "" && err.phone === "" && err.storename === "") {            
//             axios.post('//localhost:8081/signup', values)            
//             .then(res => {                
//                 navigate('/');            
//             })            
//             .catch(err => console.log(err))   
//     }    
// }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
            <h2 className='d-flex justify-content-center'>Sign-Up</h2>
                <form action=''>
                  <div className='mb-3'>
                      <label htmlFor='username'><strong>Username</strong></label>
                      <input className='form-control rounded-0' type="username" name="username" onChange={(e) => {setUsername(e.target.value)}}
                       placeholder="Enter your Username" required />
                      {errors.username && <span className='text-danger'> {errors.username}</span>}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='email'><strong>Email</strong></label>
                      <input className='form-control rounded-0' type="text" name="email" onChange={(e) => {setEmail(e.target.value)}}
                       placeholder="Enter your Email Address" required />
                      {errors.email && <span className='text-danger'> {errors.email}</span>}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='password'><strong>Password</strong></label>
                      <input className='form-control rounded-0' type="password" name="password" onChange={(e) => {setPassword(e.target.value)}}
                       placeholder="Enter your Password" required />
                      {errors.password && <span className='text-danger'> {errors.password}</span>}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='phone'><strong>Telepon</strong></label>
                      <input className='form-control rounded-0' type="phone" name="phone" onChange={(e) => {setPhone(e.target.value)}}
                       placeholder="Enter your phone" required />
                      {errors.phone && <span className='text-danger'> {errors.phone}</span>}
                  </div>

                  <div className='mb-3'>
                      <label htmlFor='storename'><strong>Nama Toko</strong></label>
                      <input className='form-control rounded-0' type="storename" name="storename" onChange={(e) => {setStorename(e.target.value)}}
                       placeholder="Enter your storename" required />
                      {errors.storename && <span className='text-danger'> {errors.storename}</span>}
                  </div>

                  <input className="button btn btn-warning w-100" type="submit" onClick={signup} value="Create an account" />
                  <button className="btn btn-success w-100" type="submit" onClick={signup}>Create Account</button>
                  {/* <p>You are agree to aour terms and policies</p> */}
                  <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                  <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{signupStatus}</h1>
                </form>
            </div>
        </div>
    )
}


export default Signup;