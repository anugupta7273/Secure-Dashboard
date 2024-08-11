import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { loginUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const data = await loginUser(email, password);
        setToken(data.token);
        setError('');
        localStorage.setItem('token', data.token); // Store token in localStorage
        navigate('/dashboard'); // Redirect to the dashboard
      } catch (error) {
        setError('Login failed. Please check your credentials.');
      }
    };
  
    return (
      <Container>
        <h2>Sign In</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-3" variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
        {error && <p>{error}</p>}
      </Container>
    );
  };
  
  export default SignIn;