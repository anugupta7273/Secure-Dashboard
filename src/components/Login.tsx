import React, { useState } from 'react';

import { loginUser } from '../services/userService';

const Login: React.FC = () => {
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [error, setError] = useState(''); // State for error messages
    const [token, setToken] = useState(''); // State for storing the JWT token
  
    // Function to handle login
    const handleLogin = async () => {
      try {
        const data = await loginUser(email, password); // Call loginUser service
        setToken(data.token); // Store the token from the response
        setError(''); // Clear any existing errors
      } catch (error) {
        setError('Login failed. Please check your credentials.'); // Set an error message
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>} // Display error message if any
        {token && <p>Logged in successfully! Token: {token}</p>} // Display token if login is successful
      </div>
    );
  };
  
  export default Login;