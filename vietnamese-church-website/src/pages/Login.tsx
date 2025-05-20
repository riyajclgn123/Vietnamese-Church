import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

type LoginProps = {
  onLogin: () => void;
  checkLogin: (email: string, password: string) => boolean;
};

const Login: React.FC<LoginProps> = ({ onLogin, checkLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkLogin(email, password)) {
      onLogin();
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
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
        <text>
            email: user@example.com,
    password: 123456 ,
        </text>
        <div className="auth-switch">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign Up</span>
        </div>
      </form>
    </div>
  );
};

export default Login;