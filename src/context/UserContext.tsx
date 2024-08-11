import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the shape of your user state
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }

  interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    login: (userData: User) => void;
    logout: () => void;
  }

  const UserContext = createContext<UserContextType | undefined>(undefined);

  // Create a provider component
  export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
    const login = (userData: User) => {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('user');
    };
  
    return (
      <UserContext.Provider value={{ user, setUser, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  // Custom hook for using the UserContext
  export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
  };