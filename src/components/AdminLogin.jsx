import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../asets/style/Login.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleAdminLogin = async () => {
    setError(''); // Reset error state

    const data= {name, password};

    if ( name === '' || password === '') {
      setError('Admin ID and Password cannot be empty'); // Check if fields are empty
      return;
    }

    try {
      // const response = await axios.post('YOUR_API_ENDPOINT', { adminId, password });
      const response = await axios.post('http://13.127.211.205:8000/v1/login/admin',data);
      console.log(response);

      if (response.status === 200) {
        // Store role in localStorage based on API response
        localStorage.setItem('role', 'admin'); // Assuming the role is provided in the response

        // Redirect to admin dashboard
        window.location.href ='/admindashboard';
      } else {
        setError('Invalid admin credentials'); // Display error message for failed login
      }
    } catch (error) {
      setError('Login failed. Please try again.'); // Handle other errors (network issues, etc.)
    }
  };

  const handleUserLogin = () => {
    navigate('/login'); // Redirect to user login
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="header-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEzE7kNt-HB1k5CpZ0bz-Dkttw9_Jn23U3lfydPk-vDnxrGha6yli3Q4lckPVqm-5LIs&usqp=CAU" // Replace with your logo's URL
            alt="Admin System Logo"
            style={{ width: '60px' }}
          />
        </div>
        <div className="header-right">
          <Button className="user-button m-2 p-1" onClick={handleUserLogin}>
            <FontAwesomeIcon icon={faUser} /> User
          </Button>
        </div>
      </header>
      <div className="background">
        <div className="login-card">
          <h1>Admin Login</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Admin ID"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <Button className="login-button" onClick={handleAdminLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;