import React, { useState } from 'react';
import { Container, FormContainer, Input, Button, Title, CardContainer, UserCard } from '../styles';

const RegistrationForm = ({ onSubmit }) => {
  const [user, setUser] = useState({ name: '', age: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: '', age: '', email: '', password: '' }); // Clear form
  };

  return (
    <FormContainer>
      <Title>Register</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <Input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <Button type="submit">Register</Button>
      </form>
    </FormContainer>
  );
};

const LoginForm = ({ onLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(user);
    setUser({ email: '', password: '' }); // Clear form
  };

  return (
    <FormContainer>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </FormContainer>
  );
};

const AuthForm = ({ users, setUsers, setAuth }) => {
  const handleRegistration = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Registration successful! You can now log in.');
  };

  const handleLogin = (loginUser) => {
    const storedUser = users.find(u => u.email === loginUser.email && u.password === loginUser.password);
    if (storedUser) {
      localStorage.setItem('authToken', 'fake-jwt-token');
      localStorage.setItem('user', JSON.stringify(storedUser)); // Store user details
      setAuth(true);
      alert('Login successful!');
      window.location.href = '/dashboard'; // Redirect to dashboard after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      <RegistrationForm onSubmit={handleRegistration} />
      <LoginForm onLogin={handleLogin} />
      <CardContainer>
        {users.map((user, index) => (
          <UserCard key={index} highlighted={localStorage.getItem('authToken') && user.email === JSON.parse(localStorage.getItem('user')).email}>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </UserCard>
        ))}
      </CardContainer>
    </Container>
  );
};

export default AuthForm;
