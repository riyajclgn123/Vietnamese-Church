import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();

  if (password !== confirm) {
    setError('Passwords do not match');
    return;
  }

  if (!firstName || !lastName) {
    setError('Please enter your first and last name');
    return;
  }

  setLoading(true);
  setError('');

  try {
    const response = await fetch('http://localhost:4000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName }),  // send separately
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || 'Registration failed'); // changed to message for backend
      setLoading(false);
      return;
    }

    navigate('/login');
  } catch (err) {
    setError('Network error');
    setLoading(false);
  }
};

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        {error && <div className="auth-error">{error}</div>}
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <div className="auth-switch">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')}>Login</span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;