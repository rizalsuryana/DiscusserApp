import React from 'react';
import PropTypes from 'prop-types';
import { GiDiscussion, } from 'react-icons/gi';
import { FaRankingStar } from 'react-icons/fa6';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ROUTE_PATH from '../../../config/routePaths';
import { BiSolidMessageAdd } from 'react-icons/bi';

const SidebarList = ({ signOut }) => {
  return (
    <div className="sidebar">
      <Link to={ROUTE_PATH.HOME_PAGE}>
        <div className="side-discussion">
          <div className="sidebar-icon__discussion">
            <GiDiscussion/>
          </div>
          <div className="sidebar-title__discussion">
          Discussion
          </div>
        </div>
      </Link>
      <div className="sidebar-add-post">
        <Link to={ROUTE_PATH.ADD_PAGE}>
          <div className="button-div" type='button'>
            <BiSolidMessageAdd/>
          </div>
          <div className="sidebar-add-post-text">
              Create Post
          </div>
        </Link>
      </div>
      <Link to={ROUTE_PATH.LEADER_BOARDS_PAGE}>
        <div className="sidebar-leaderboar">
          <div className="sidebar-icon__leaderboard">
            <FaRankingStar/>
          </div>
          <div className="sidebar-title__leaderboard">
          Leaderboard
          </div>
        </div>
      </Link>
      <div className="sidebar-logout">
        <div className="sidebar-icon__logout">
          <RiLogoutCircleFill/>
        </div>
        <button
          className='button-logout'
          type='button'
          onClick={signOut}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

SidebarList.propTypes = {
  signOut: PropTypes.func.isRequired
};

export default SidebarList;