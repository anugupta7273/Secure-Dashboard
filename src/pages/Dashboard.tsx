import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { fetchUsers } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin'); // Redirect to sign-in if no token is found
      } else {
        const fetchData = async () => {
          try {
            const data = await fetchUsers();
            setUsers(data.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
        fetchData();
      }
    }, [navigate]);

    return (
        <Container>
          <h2>Dashboard</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.first_name} {user.last_name}</li>
            ))}
          </ul>
        </Container>
      );
    };
    
    export default Dashboard;