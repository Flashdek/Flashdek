import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <button>Sign Up with Github</button>
      <div>Already have an account?</div>
      <Link to='/login'><button>Go to Login Page</button></Link>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" />
        <div></div>
        <label>Username
        </label><input type="text" placeholder="New Username"/>
        <div></div>
        <label>Email</label>
        <input type="text" placeholder="Email"/>
        <div></div>
        <label>Password</label>
        <input type="text" placeholder="Password"/>
        <div></div>
        <label>Confirm Password</label>
        <input type="text" placeholder="Confirm Password"/>
        <div></div>
      </form>
      <button>Submit</button>
    </div>
  )
}

export default Signup;