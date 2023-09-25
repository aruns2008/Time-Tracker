import React from "react";

const LogInPage = () => {
  return (
    <>
<div className="container">
  <div className="card">
    <h2>Login Form</h2>
    <form>
      <label for="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username"/>

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password"/>

      <button type="submit">Login</button>
    </form>
  </div>
</div>
</>
  );
};


export default LogInPage;