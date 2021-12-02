import React from 'react';
import {Link} from 'react-router-dom';

const client_id = '2891ceb6aae86745b92a';
const redirect_uri = 'https://localhost:8080';


const Login = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username"/>
        <div></div>
        <input type="text" placeholder="Password"/>
        <div></div>
      </form>
      <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}><button>Login With GitHub</button></a>
      <button>Login</button>
      <div></div>
      <button>Forgot Password</button>
      <Link to='/signup'><button>No Account? Sign up!</button></Link>
    </div>
  )
}

export default Login;