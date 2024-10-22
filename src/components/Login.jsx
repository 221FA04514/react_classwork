import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Input, Button, Title } from '../styles';

const Login = ({ setAuth }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === user.email && storedUser.password === user.password) {
      localStorage.setItem('authToken', 'fake-jwt-token'); // Simulating a token
      setAuth(true);
      navigate('/'); // Redirect to Dashboard after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Login;
