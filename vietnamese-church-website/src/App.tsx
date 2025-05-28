import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Graduates from './pages/Graduates';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserPage from './pages/User';
import './styles/App.css';

interface User {
  email: string;
  firstName: string;
  lastName: string;
  password?: string; // optional or remove this field
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>([
  {
    email: 'user@example.com',
    password: '123456',
    firstName: 'John',
    lastName: 'Doe'
  }
]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const handleRegister = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  const handleLogin = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) return false;
    const user = await response.json();
    setCurrentUser(user);
    return true;
  } catch (err) {
    return false;
  }
};
    const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && (
          <Navbar
            onLogout={handleLogout}
            onAvatarClick={() => window.location.href = '/user'}
          />
        )}
        <Routes>
          <Route
            path="/login"
            element={
             <Login
  onLogin={() => setIsAuthenticated(true)}
  setCurrentUser={setCurrentUser}
/>

            }
          />
          <Route
            path="/signup"
            element={
              <SignUp/>
            }
          />
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/graduates" element={<Graduates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/user" element={currentUser ? <UserPage user={currentUser} /> : <Navigate to="/" />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
};

export default App;