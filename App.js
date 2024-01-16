// src/App.js

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const switchForm = (form) => {
    setCurrentForm(form);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <LoginForm switchForm={switchForm} />
      ) : (
        <RegisterForm switchForm={switchForm} />
      )}
    </div>
  );
}

export default App;
