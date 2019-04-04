import React from "react";

const Login = props => {

 
  return (
    <div className="login">
      <form onSubmit={props.loginSubmit}>
        <input
          type="text"
          value={props.username}
          placeholder="Username"
          onchange={props.handleChange}
          name="username"
        />
        <input
          type="text"
          value={props.password}
          placeholder="Password"
          onchange={props.handleChange}
          name="password"
        />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

export default Login;
