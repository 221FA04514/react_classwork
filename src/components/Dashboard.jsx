import React from 'react';
import { Container, Title } from '../styles';

const Dashboard = ({ users, auth, setAuth }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuth(false);
    alert('You have logged out.');
  };

  return (
    <Container>
      <Title>Dashboard</Title>
      {auth ? (
        <>
          <h2>Your Details:</h2>
          <p>Name: {JSON.parse(localStorage.getItem('user')).name}</p>
          <p>Age: {JSON.parse(localStorage.getItem('user')).age}</p>
          <p>Email: {JSON.parse(localStorage.getItem('user')).email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <h2>Please log in to see your details.</h2>
      )}
    </Container>
  );
};

export default Dashboard;
