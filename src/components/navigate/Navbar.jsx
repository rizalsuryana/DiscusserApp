import React from 'react';
import { BiSolidExit } from 'react-icons/bi';

import PropTypes from 'prop-types';
import NavbarList from './materials/NavbarList';
import { NavbarContainer, Discusser, ProfileName, ProfileInfo, ProfileAvatar, ButtonLogout, NavbarTitleButton } from '../styled/Navbar';

const Navbar = ({ signOut, authUser }) => {
  return (
    <NavbarContainer>
      <Discusser src='/icon.webp' alt='Discusser'/>
      <NavbarList signOut={signOut} />
      <ProfileInfo>
        <ProfileAvatar src={authUser.avatar} alt="User Avatar" />
        <ProfileName>{authUser.name}</ProfileName>
        <ButtonLogout onClick={signOut}>
          <BiSolidExit/>
        </ButtonLogout>
        <NavbarTitleButton onClick={signOut}>
                  Sign Out
        </NavbarTitleButton>
      </ProfileInfo>
    </NavbarContainer>
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
