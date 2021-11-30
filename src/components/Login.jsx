import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username"/>
        <div></div>
        <input type="text" placeholder="Password"/>
        <div></div>
      </form>
      <button>Login With GitHub</button>
      <button>Login</button>
      <div></div>
      <button>Forgot Password</button>
      <Link to='/signup'><button>No Account? Sign up!</button></Link>
    </div>
  )
}

export default Login;