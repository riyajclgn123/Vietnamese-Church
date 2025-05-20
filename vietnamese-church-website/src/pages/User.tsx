import React from 'react';
import './User.css';

type UserProps = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
};

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="user-profile-container">
      <div className="user-card">
        <img
          src="https://i.pravatar.cc/120"
          alt="User Avatar"
          className="user-avatar-large"
        />
        <h2>{user.firstName} {user.lastName}</h2>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default User;