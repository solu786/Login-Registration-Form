

import React, { useState } from 'react';
import './AuthForm.css';

const LoginForm = ({ switchForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    if (username === 'demo' && password === 'password') {
      alert('Login successful!');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
       
      <h2 className="auth-header">Login</h2>
        <form>
          <div className="form-group">
         
           
            <label htmlFor="username"> Username</label>
            <input
              type="text"
              id= "username"
              name="username"
              placeholder="Enter your username"required
              value={username}
             
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
         
          <div className="form-group">

          
            <label htmlFor="password"> Password</label>
            <input
                 
              
              type="password"
              id= "password"
              name="password"
              placeholder="Enter your password"  required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             
          
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <p className="switch-form" onClick={() => switchForm('register')}>
            Don't have an account? Register here.
            
          </p>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
