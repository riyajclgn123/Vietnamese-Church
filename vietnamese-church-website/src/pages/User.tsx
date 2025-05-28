import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

type UserProps = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    // id?: string; // Uncomment if you have user IDs
  };
};

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="user-profile-container">
      <Link to="/user" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="user-card" style={{ cursor: 'pointer' }}>
          <img
            src="https://i.pravatar.cc/120"
            alt="User Avatar"
            className="user-avatar-large"
          />
          <h2>{user.firstName} {user.lastName}</h2>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </Link>
    </div>
  );
};

export default User;