// src/RegisterForm.js

import React, { useState } from 'react';
import './AuthForm.css';

const RegisterForm = ({ switchForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Add logic to handle successful registration
      alert('Registration successful!');
      setError('');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
      <h2 className="auth-header">Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"required

              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"requireed
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmpassword"
              placeholder="Reenter your password"required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <p className="switch-form" onClick={() => switchForm('login')}>
            Already have an account? Login here.
          </p>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
