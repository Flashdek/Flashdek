import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const axios = require('axios');

const client_id = '2891ceb6aae86745b92a';
const redirect_uri = 'http://localhost:8080';

const Signup = () => {

  const [ name, setName ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');

  const navigate = useNavigate();
  
  const submitHandler = () => {
    if (password !== confirmPassword) {alert('passwords do not match');}
    else {
      axios.post('/api/addUser', {
        name: name,
        username: userName,
        email: email,
        password: password
      })
      .then(function (response) {
        console.log('Response: ', response);
        alert('sign-up successful!');
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  return (
    <div>
      <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}><button>Sign Up with Github</button></a>
      <div>Already have an account?</div>
      <Link to='/login'><button>Go to Login Page</button></Link>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        <div></div>
        <label>Username
        </label><input type="text" placeholder="New Username" value={userName} onChange={e => setUserName(e.target.value)}/>
        <div></div>
        <label>Email</label>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <div></div>
        <label>Password</label>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <div></div>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        <div></div>
      </form>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Signup;