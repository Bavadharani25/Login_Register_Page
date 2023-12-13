import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    if (event.target.name === 'confirmPassword') {
      if (event.target.value !== values.password) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration data:', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <label>
        First Name:
        <input type="text" name="firstName" onChange={handleChange} required />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} required />
      </label>
      {passwordError && <p>Passwords should match</p>}
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" onChange={handleChange} required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
