import React, { useState } from "react";

const Login = (props) => {
  const initialUserState = {
    name: "",
    id: "",
  };
  const [user, setUser] = useState(initialUserState);

  //handle change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    //function from the other page (app.js)
    props.login(user);
    props.history.push("/");
  };

  return (
    <div className="submit-form" id="login-form">
      <h1>Login</h1>
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>
        <button onClick={login} className="btn btn-success btn-login">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
