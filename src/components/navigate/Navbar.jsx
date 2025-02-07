import React from 'react';
import { BiSolidExit } from 'react-icons/bi';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavbarList from './materials/NavbarList';
import { NavbarContainer, Discusser, ProfileName, ProfileInfo, ProfileAvatar, ButtonLogout, NavbarTitleButton } from '../styled/Navbar';

const DiscusserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const DiscusserName = styled.a`
//   font-size: 1rem;
//   color: #007bff;
//   text-decoration: none;
//   margin-top: 5px;
// font-weight: bold;
//   &:hover {
//     color: black;
//   }
// @media(max-width: 769px) {
// display: none;
// }
// `;


const Navbar = ({ signOut, authUser }) => {
  return (
    <NavbarContainer>
      <DiscusserWrapper>
        <a href="https://github.com/rizalsuryana" target="_blank" rel="noopener noreferrer">
          <Discusser src='/icon.webp' alt='Discusser'/>
        </a>
        {/* <DiscusserName href="https://github.com/rizalsuryana" target="_blank" rel="noopener noreferrer">
          Disscuser
        </DiscusserName> */}
      </DiscusserWrapper>
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
