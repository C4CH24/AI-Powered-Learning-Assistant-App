import React from 'react';
import { useAuth } from '../../context';

const ProfilePage = () => {
  const { user } = useAuth();
  return (
    <div className="page profile-page p-6">
      <h1>Profile</h1>
      <p>{user?.email ? `Email: ${user.email}` : 'No user data'}</p>
    </div>
  );
};

export default ProfilePage;
