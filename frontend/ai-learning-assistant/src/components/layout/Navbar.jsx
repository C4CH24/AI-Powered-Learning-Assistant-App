import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold">AI Learning</Link>
          {isAuthenticated && (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/documents">Documents</Link>
              <Link to="/flashcards">Flashcards</Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm">{user?.email}</span>
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
