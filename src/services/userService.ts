import axios from 'axios';

// Set the base URL for the ReqRes API
const API_URL = 'https://reqres.in/api';


// User login function
export const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data; // Return the token or user data
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  // Fetch users function (for retrieving a list of users)
export const fetchUsers = async (page: number = 1) => {
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: { page },
      });
      return response.data; // Return the users data
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };

  // Fetch a single user by ID
export const fetchUserById = async (id: string) => {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data; // Return the user data
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  };