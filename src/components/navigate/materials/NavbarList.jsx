import React from "react";
import PropTypes from "prop-types";
import { FaRankingStar } from "react-icons/fa6";
import ROUTE_PATH from "../../../config/routePaths";
import {
  NavbarLinks,
  NavbarItem,
  AddPost,
  NavbarTitle,
} from "../../styled/Navbar";
import { MdHome, MdAddBox } from "react-icons/md";
const NavbarList = () => {
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
          <MdHome />
          <NavbarTitle>Discussion</NavbarTitle>
        </NavbarItem>
        <AddPost className="floating-button" to={ROUTE_PATH.ADD_PAGE}>
          <MdAddBox />
          <NavbarTitle>Create Post</NavbarTitle>
        </AddPost>
        <NavbarItem to={ROUTE_PATH.LEADER_BOARDS_PAGE}>
          <FaRankingStar />
          <NavbarTitle>Leaderboard</NavbarTitle>
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
