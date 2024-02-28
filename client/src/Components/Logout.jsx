// Logout.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here
    const logout = async () => {
        console.log("inside logout")
      try {
        const response = await fetch('http://localhost:3000/users/logout');
        console.log(response.status)
        if (response.ok) {
          // Redirect to the home page after successful logout
          console.log("logout")
          navigate('/');
        } else {
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logout();
  },[]);

  return <div>Logging out...</div>;
};

export default Logout;
