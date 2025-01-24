import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavbarList from './materials/NavbarList';

const Navbar = ({ signOut, authUser }) => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-title">

      </div>
      <div className="navbar-profile">
        <div className="profile-info">
          <img
            src={authUser.avatar}
            alt="User Avatar"
            className="profile-avatar"
          />
          <span className="profile-name">{authUser.name}</span>
        </div>
      </div>
      <div className={`hamburger-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavbarList signOut={signOut} isOpen={isOpen} />
    </div>
  );
};

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navbar;
