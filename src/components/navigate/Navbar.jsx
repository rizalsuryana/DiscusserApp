import React from 'react';
import PropTypes from 'prop-types';
import NavigationData from './materials/NavigationList';
import UserProfile from '../page-materials/UserProfile';

const Navbar = ({ authUser, signOut }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-container__user-profile">
        <UserProfile authUser={authUser}/>
      </div>
      <div className="navbar-container__signout">
        <NavigationData signOut={signOut}/>
      </div>
    </div>
  );
};

const authUserShape ={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired
};


export default Navbar;