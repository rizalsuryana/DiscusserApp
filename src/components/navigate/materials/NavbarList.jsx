import React from 'react';
import PropTypes from 'prop-types';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { FaRankingStar } from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ROUTE_PATH from '../../../config/routePaths';

const NavbarList = ({ signOut, isOpen }) => {
  return (
    <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
      <Link to={ROUTE_PATH.HOME_PAGE}>
        <div className="navbar-item">
          <div className="navbar-icon">
            <VscCommentDiscussion />
          </div>
          <div className="navbar-title">Discussion</div>
        </div>
      </Link>
      {/* <Link to={ROUTE_PATH.ADD_PAGE}>
        <div className="navbar-item navbar-add-post">
          <div className="button-div">
            <BiSolidMessageAdd />
          </div>
          <div className="navbar-add-post-text">Create Post</div>
        </div>
      </Link> */}
      <Link to={ROUTE_PATH.LEADER_BOARDS_PAGE}>
        <div className="navbar-item">
          <div className="navbar-icon">
            <FaRankingStar />
          </div>
          <div className="navbar-title">Leaderboard</div>
        </div>
      </Link>
      <div className="navbar-signout">
        <div className="navbar-icon__logout">

        </div>
        <button className="button-logout" type="button" onClick={signOut}>
          <IoLogOut />SignOut
        </button>
      </div>
    </div>
  );
};

NavbarList.propTypes = {
  signOut: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default NavbarList;
