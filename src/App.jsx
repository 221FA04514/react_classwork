import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AuthForm users={users} setUsers={setUsers} setAuth={setAuth} />
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard users={users} auth={auth} setAuth={setAuth} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
