import React, { useState } from "react";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User registered successfully");
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" /><br />
        <input type="text" placeholder="First Name" /><br />
        <input type="text" placeholder="Last Name" /><br />
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
