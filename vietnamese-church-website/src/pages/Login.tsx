import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust path if needed
import './Auth.css';

type LoginProps = {
  onLogin: () => void;
  setCurrentUser: (user: { email: string; firstName: string; lastName: string }) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin, setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const displayName = user.displayName || '';
      const [firstName = '', lastName = ''] = displayName.split(' ');

      setCurrentUser({
        email: user.email || '',
        firstName,
        lastName,
      });

      const idToken = await user.getIdToken();

      // Send token to backend (optional, if you have a backend)
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to login');
      }

      onLogin();
      navigate('/');
    } catch (err: any) {
      console.error('Login error:', err.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="auth-error">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="auth-switch">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign Up</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
