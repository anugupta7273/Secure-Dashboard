import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './components/Login';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  const headerText = 'User Management Dashboard';
  return (

    <Router>
      <div className="App-header">
    <Container>
    <h1>
            {headerText.split('').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
        <Route path="/" element={<SignIn />} /> {/* Default route */}
      </Routes>
    </Container>
    </div>
  </Router>

  //   <Container>
  //   <h1>User Management Dashboard</h1>
  //   <Login /> {/* Rendering the Login component */}
  // </Container>

  );
}

export default App;
