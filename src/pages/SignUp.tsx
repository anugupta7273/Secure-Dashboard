import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSignUp = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await axios.post('https://reqres.in/api/register', { email, password });
        navigate('/signin'); // Redirect to sign-in page after successful registration
      } catch (error) {
        setError('Sign up failed. Please try again.');
      }
    };


  return (
    <Container>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSignUp}>
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
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default SignUp;