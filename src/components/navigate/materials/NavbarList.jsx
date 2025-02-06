
import React from 'react';
import PropTypes from 'prop-types';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { FaRankingStar } from 'react-icons/fa6';
// import { IoLogOut } from 'react-icons/io5';
import ROUTE_PATH from '../../../config/routePaths';
import { NavbarLinks,
  NavbarItem,
  // ButtonLogout,
  CreatePostButton,
  AddPost,
  NavbarTitle } from '../../styled/Navbar';
import { BiSolidMessageAdd } from 'react-icons/bi';

const NavbarList = ({ signOut }) => {
  return (
    <>
      <NavbarLinks>
        {/* <ButtonLogout onClick={signOut}>
          <IoLogOut />
          <NavbarTitle>
          Sign Out
          </NavbarTitle>
        </ButtonLogout> */}
        <NavbarItem to={ROUTE_PATH.HOME_PAGE}>
          <VscCommentDiscussion />
          <NavbarTitle>
          Discussion
          </NavbarTitle>
        </NavbarItem>
        <AddPost className='floating-button' to={ROUTE_PATH.ADD_PAGE}>
          <BiSolidMessageAdd />
          <NavbarTitle>
            Create Post
          </NavbarTitle>
        </AddPost>
        <NavbarItem to={ROUTE_PATH.LEADER_BOARDS_PAGE}>
          <FaRankingStar />
          <NavbarTitle>
          Leaderboard
          </NavbarTitle>
        </NavbarItem>
        {/* Ikon tambah thread hanya muncul di mobile */}
        {/* <CreatePostButton to={ROUTE_PATH.ADD_PAGE}>
          <BiSolidMessageAdd />
        </CreatePostButton> */}
      </NavbarLinks>
    </>
  );
};

NavbarList.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default NavbarList;

