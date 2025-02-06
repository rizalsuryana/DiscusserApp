
import React from 'react';
import PropTypes from 'prop-types';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { FaRankingStar } from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';
import ROUTE_PATH from '../../../config/routePaths';
import { NavbarLinks,
  NavbarItem,
  ButtonLogout,
  CreatePostButton, } from '../../styled/Navbar';
import { BiSolidMessageAdd } from 'react-icons/bi';


const NavbarList = ({ signOut }) => {
  return (
    <>
      <NavbarLinks>
        <NavbarItem to={ROUTE_PATH.HOME_PAGE}>
          <VscCommentDiscussion />
          Discussion
        </NavbarItem>
        <NavbarItem to={ROUTE_PATH.LEADER_BOARDS_PAGE}>
          <FaRankingStar />
          Leaderboard
        </NavbarItem>

        {/* Ikon tambah thread hanya muncul di mobile */}
        <CreatePostButton to={ROUTE_PATH.ADD_PAGE}>
          <BiSolidMessageAdd />
        </CreatePostButton>

        <ButtonLogout onClick={signOut}>
          <IoLogOut />
          Sign Out
        </ButtonLogout>
      </NavbarLinks>
    </>
  );
};

NavbarList.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default NavbarList;

