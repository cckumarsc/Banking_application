import React, { useState } from 'react';
import './App.css';

function App() {
  const [showCredentials, setShowCredentials] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setShowCredentials(true);
    // reset fields when navigating to credential page
    setUserId('');
    setPassword('');
  };

  const handleSubmit = () => {
    // here would normally validate credentials
    setLoggedIn(true);
    setShowCredentials(false);
  };

  return (
    <div className="login-container" style={{ textAlign: 'center', padding: '2rem' }}>
      {loggedIn ? (
        <>
          <h2>Welcome, {userId || 'User'}!</h2>
          <p>This is your new landing screen.</p>
        </>
      ) : showCredentials ? (
        <>
<div style={{ marginBottom: '1rem', textAlign: 'left' }}>
      <label htmlFor="userId" style={{ display: 'block', marginBottom: '0.25rem' }}>
        User ID
      </label>
      <input
        id="userId"
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
    </div>

    <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
      <label htmlFor="password" style={{ display: 'block', marginBottom: '0.25rem' }}>
        Password
      </label>
      <input
        id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>
            Submit
          </button>
          <div style={{ marginTop: '1rem' }}>
            <button
              style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}
              onClick={() => setShowCredentials(false)}
            >
              ← Back
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ color: 'green', fontWeight: 'bold' }}>Personal banking app</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default App;
