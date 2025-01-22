import React from 'react';
import PropTypes from 'prop-types';
import SidebarList from './materials/SidebarList';
import UserProfile from '../page-materials/UserProfile';

const Sidebar = ({ authUser, signOut }) => {
  return (
    <div className="sidebar-container">
      <div className="navbar-container__user-profile">
        <UserProfile authUser={authUser}/>
      </div>
      <div className="navbar-container__signout">
        <SidebarList signOut={signOut}/>
      </div>
    </div>
  );
};

const authUserShape ={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
Sidebar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired
};


export default Sidebar;