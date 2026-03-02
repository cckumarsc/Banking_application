import React from 'react';
import './App.css';

function App() {
  const handleLogin = () => {
    // TODO: replace with real auth logic
    alert('Login button clicked');
  };

  return (
    <div className="login-container" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ color: 'green', fontWeight: 'bold' }}>Personal banking app</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
