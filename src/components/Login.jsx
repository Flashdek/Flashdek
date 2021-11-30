import React from 'react';

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
      <button>No Account? Sign up!</button>
    </div>
  )
}

export default Login;