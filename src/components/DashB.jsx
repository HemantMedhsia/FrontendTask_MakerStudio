import React, { useState } from 'react';
import '../Style/DashB.css';
import Display from './Display';

const DashB = () => {
  const [signupData, setSignupData] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');
//   const [loginusername, setloginusername] = useState('');
//   const [loginpass, setloginpass] = useState('') // 

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const newSignup = {
      username: username,
      email: email,
      password: password
    };

    setSignupData([...signupData, newSignup]);

    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Simplified login logic for demonstration
    if (username === username && password === password) {
      setIsLoggedIn(true);
      setDisplayName(username); // Store username for display
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setDisplayName('');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
      </header>
      <main className="dashboard-main">
        {!isLoggedIn ? (
          <div className="auth-section">
            <div className="auth-toggle">
              <button onClick={() => setShowLogin(false)} className={!showLogin ? 'active common' : 'common'}>Sign Up</button>
              <button onClick={() => setShowLogin(true)} className={showLogin ? 'active common' : 'common'}>Login</button>
            </div>
            {!showLogin ? (
              <section className="signup-section">
                <h2>Sign Up</h2>
                <form className="signup-form" onSubmit={handleSignupSubmit}>
                  <div className="form-group">
                    <label htmlFor="signup-username">Username:</label>
                    <input
                      type="text"
                      id="signup-username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-email">Email:</label>
                    <input
                      type="email"
                      id="signup-email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-password">Password:</label>
                    <input
                      type="password"
                      id="signup-password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="auth-button">Sign Up</button>
                </form>
              </section>
            ) : (
              <section className="login-section">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label htmlFor="login-username">Username:</label>
                    <input
                      type="text"
                      id="login-username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login-password">Password:</label>
                    <input
                      type="password"
                      id="login-password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="auth-button">Login</button>
                </form>
              </section>
            )}
          </div>
        ) : (
          <section className="info-section">
            <h2>Welcome, {displayName}!</h2>
            <Display name={displayName} />
            <p>Dashboard content here...</p>
            <button onClick={handleLogout}>Logout</button>
          </section>
        )}
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Ftask</p>
      </footer>
    </div>
  );
};

export default DashB;
