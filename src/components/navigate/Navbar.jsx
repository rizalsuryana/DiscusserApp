// Navbar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ROUTE_PATH from '../../config/routePaths';
import { Link, useLocation } from 'react-router-dom';
import {
  BiLogOut,
  BiHomeAlt,
  BiTrophy,
  BiPlusCircle
} from 'react-icons/bi';
import * as UI from './NavbarStyles';

const Navbar = ({ signOut, authUser }) => {
  const location = useLocation();
  const [showDesktopProfileMenu, setShowDesktopProfileMenu] = useState(false);
  const [showMobileProfileMenu, setShowMobileProfileMenu] = useState(false);

  const toggleDesktopProfileMenu = () => setShowDesktopProfileMenu(!showDesktopProfileMenu);
  const toggleMobileProfileMenu = () => setShowMobileProfileMenu(!showMobileProfileMenu);

  const navItems = [
    { path: ROUTE_PATH.HOME_PAGE, icon: BiHomeAlt, label: 'Home' },
    { path: ROUTE_PATH.LEADER_BOARDS_PAGE, icon: BiTrophy, label: 'Leaderboard' },
  ];

  return (
    <UI.NavbarContainer>
      {/* Desktop Navbar */}
      <UI.DesktopNav>
        <UI.LogoContainer>
          <a href="https://github.com/rizalsuryana" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <UI.LogoImage src="/icon.webp" alt="Discusser" />
            <UI.LogoName>Discusser</UI.LogoName>
          </a>
        </UI.LogoContainer>


        <UI.NavLinks>
          {navItems.map((item) => (
            <UI.NavLinkItem key={item.path}>
              <Link to={item.path}>
                <item.icon size={24} />
                <span>{item.label}</span>
              </Link>
            </UI.NavLinkItem>
          ))}
        </UI.NavLinks>

        <UI.ProfileSection>
          <UI.ProfileInfo onClick={toggleDesktopProfileMenu}>
            <UI.AvatarImage src={authUser.avatar} alt="User Avatar" />
          </UI.ProfileInfo>

          <UI.ProfileMenu show={showDesktopProfileMenu}>
            <UI.MenuItem onClick={signOut}>
              <BiLogOut size={18} />
              <span>Log Out</span>
            </UI.MenuItem>
          </UI.ProfileMenu>
        </UI.ProfileSection>

        <UI.FloatingCreateButton to={ROUTE_PATH.ADD_PAGE}>
          <BiPlusCircle size={24} />
        </UI.FloatingCreateButton>
      </UI.DesktopNav>

      {/* Mobile Navbar */}
      <UI.MobileNav>
        {navItems.map((item) => (
          <UI.MobileNavItem key={item.path}>
            <Link to={item.path}>
              <item.icon
                size={24}
                color={location.pathname === item.path ? '#ffffff' : 'rgba(255,255,255,0.7)'}
              />
            </Link>
          </UI.MobileNavItem>
        ))}

        <UI.MobileNavItem>
          <Link to={ROUTE_PATH.ADD_PAGE}>
            <BiPlusCircle
              size={24}
              color={location.pathname === ROUTE_PATH.ADD_PAGE ? '#ffffff' : 'rgba(255,255,255,0.7)'}
            />
          </Link>
        </UI.MobileNavItem>

        <UI.MobileNavItem>
          <UI.ProfileButton onClick={toggleMobileProfileMenu}>
            <UI.AvatarImage
              src={authUser.avatar}
              alt="User Avatar"
              active={location.pathname === ROUTE_PATH.PROFILE}
            />
          </UI.ProfileButton>
        </UI.MobileNavItem>
      </UI.MobileNav>

      {/* Mobile Profile Menu */}
      <UI.MobileProfileMenu show={showMobileProfileMenu}>
        <UI.MobileMenuItem onClick={signOut}>
          <BiLogOut size={20} />
          <span>Log Out</span>
        </UI.MobileMenuItem>
      </UI.MobileProfileMenu>
    </UI.NavbarContainer>
  );
};

Navbar.propTypes = {
  authUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navbar;
